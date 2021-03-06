/*
 * (C) Copyright 2016 Nuxeo SA (http://nuxeo.com/) and others.
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
 *     Gabriel Barata <gbarata@nuxeo.com>
 */

package org.nuxeo.ecm.dicom.preview;

import java.util.ArrayList;
import java.util.List;

import org.nuxeo.ecm.core.api.Blob;
import org.nuxeo.ecm.core.api.Blobs;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.platform.preview.adapter.AbstractPreviewer;
import org.nuxeo.ecm.platform.preview.adapter.MimeTypePreviewer;
import org.nuxeo.ecm.platform.preview.api.PreviewException;
import org.nuxeo.ecm.platform.web.common.vh.VirtualHostHelper;

/**
 * @since 10.10
 */
public class DICOMPreviewer extends AbstractPreviewer implements MimeTypePreviewer {

    public List<Blob> getPreview(Blob blob, DocumentModel dm) throws PreviewException {
        List<Blob> blobResults = new ArrayList<Blob>();
        StringBuilder htmlPage = new StringBuilder();
        String basePath = VirtualHostHelper.getContextPathProperty();

        htmlPage.append("<html><head>");
        htmlPage.append(String.format("<meta http-equiv=\"refresh\" content=\"0;url=%s/ui/viewers/dicom/index.html?id=%s\"/>",
                basePath, dm.getId()));
        htmlPage.append("</head></html>");

        Blob mainBlob = Blobs.createBlob(htmlPage.toString(), "text/html", null, "index.html");
        blob.setFilename("dicom");
        blobResults.add(mainBlob);
        blobResults.add(blob);

        return blobResults;
    }
}
