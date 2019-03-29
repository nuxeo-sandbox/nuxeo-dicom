/*
 * (C) Copyright 2019 Nuxeo (http://nuxeo.com/) and others.
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
 *     Damon Brown
 */
package org.nuxeo.ecm.dicom.helpers;

import java.io.IOException;
import java.io.Serializable;

import org.apache.commons.io.FilenameUtils;
import org.nuxeo.ecm.core.api.Blob;
import org.nuxeo.ecm.core.api.CloseableFile;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.core.api.NuxeoException;
import org.nuxeo.ecm.dicom.DICOMConstants;
import org.nuxeo.ecm.platform.commandline.executor.api.CmdParameters;
import org.nuxeo.ecm.platform.commandline.executor.api.CommandException;
import org.nuxeo.ecm.platform.commandline.executor.api.CommandLineExecutorService;
import org.nuxeo.ecm.platform.commandline.executor.api.CommandNotAvailable;
import org.nuxeo.ecm.platform.commandline.executor.api.ExecResult;
import org.nuxeo.runtime.api.Framework;

/**
 * @since 10.10
 */
public class DICOMHelper {

    public static void updateDICOMInfo(DocumentModel docModel, Blob dicom) {
        DICOMInfo info = getDICOMInfo(dicom);

        docModel.setPropertyValue("dcm:time", info.getTime());
        docModel.setPropertyValue("dcm:frames", info.getFrames());
        docModel.setPropertyValue("dcm:modality", info.getModality());
        docModel.setPropertyValue("dcm:tags", (Serializable) info.getTags());
    }

    public static DICOMInfo getDICOMInfo(Blob dicom) {
        if (dicom == null || dicom.getLength() == 0) {
            return DICOMInfo.EMPTY_INFO;
        }
        try {
            ExecResult result;
            try (CloseableFile cf = dicom.getCloseableFile("." + FilenameUtils.getExtension(dicom.getFilename()))) {
                CommandLineExecutorService cles = Framework.getService(CommandLineExecutorService.class);
                CmdParameters params = cles.getDefaultCmdParameters();
                params.addNamedParameter("filePath", cf.getFile().getAbsolutePath());

                // read the duration with a first command to adjust the best rate:
                result = cles.execCommand(DICOMConstants.DICOM_INFO_COMMAND_LINE, params);
            }
            if (!result.isSuccessful()) {
                throw result.getError();
            }
            return DICOMInfo.fromIdentify(result.getOutput());
        } catch (CommandNotAvailable | CommandException | IOException e) {
            throw new NuxeoException(e);
        }
    }

}
