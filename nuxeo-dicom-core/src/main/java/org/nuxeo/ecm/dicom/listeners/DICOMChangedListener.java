/*
 * (C) Copyright 2010 Nuxeo SA (http://nuxeo.com/) and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Contributors:
 *     Nuxeo - initial API and implementation
 */

package org.nuxeo.ecm.dicom.listeners;

import static org.nuxeo.ecm.core.api.event.DocumentEventTypes.BEFORE_DOC_UPDATE;
import static org.nuxeo.ecm.core.api.event.DocumentEventTypes.DOCUMENT_CREATED;

import java.io.IOException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.core.api.NuxeoException;
import org.nuxeo.ecm.core.event.Event;
import org.nuxeo.ecm.core.event.EventContext;
import org.nuxeo.ecm.core.event.EventListener;
import org.nuxeo.ecm.core.event.impl.DocumentEventContext;
import org.nuxeo.ecm.core.work.api.WorkManager;
import org.nuxeo.ecm.dicom.DICOMConstants;
import org.nuxeo.ecm.dicom.helpers.DICOMHelper;
import org.nuxeo.ecm.dicom.helpers.DICOMInfoWork;
import org.nuxeo.runtime.api.Framework;

/**
 * Light synchronous listener that schedules an asynchronous work to process the video info of a document.
 * <p>
 * This {@link DICOMInfoWork} will in turn schedule two asynchronous works to process the video storyboard and
 * conversions.
 *
 * @since 5.5
 */
public class DICOMChangedListener implements EventListener {

    private static final Log log = LogFactory.getLog(DICOMChangedListener.class);

    @Override
    public void handleEvent(Event event) {
        EventContext ctx = event.getContext();
        if (!(ctx instanceof DocumentEventContext)) {
            return;
        }
        DocumentEventContext docCtx = (DocumentEventContext) ctx;
        DocumentModel doc = docCtx.getSourceDocument();
        String eventName = event.getName();
        if (shouldProcess(doc, eventName)) {
            if (BEFORE_DOC_UPDATE.equals(eventName)) {
                try {
                    resetProperties(doc);
                } catch (IOException e) {
                    throw new NuxeoException(
                            String.format("Error while resetting DICOM properties of document %s.", doc), e);
                }
            }
            scheduleAsyncProcessing(doc);
        }
    }

    protected boolean shouldProcess(DocumentModel doc, String eventName) {
        return DICOMConstants.DICOM_TYPE.equals(doc.getType()) && !doc.isProxy()
                && (DOCUMENT_CREATED.equals(eventName) || doc.getProperty("file:content").isDirty());
    }

    protected void resetProperties(DocumentModel doc) throws IOException {
        log.debug(String.format("Resetting DICOM info of document %s.", doc));
        DICOMHelper.updateDICOMInfo(doc, null);  
    }

    protected void scheduleAsyncProcessing(DocumentModel doc) {
        WorkManager workManager = Framework.getService(WorkManager.class);
        DICOMInfoWork work = new DICOMInfoWork(doc.getRepositoryName(), doc.getId());
        log.debug(String.format("Scheduling work: video info of document %s.", doc));
        workManager.schedule(work, true);
    }

}