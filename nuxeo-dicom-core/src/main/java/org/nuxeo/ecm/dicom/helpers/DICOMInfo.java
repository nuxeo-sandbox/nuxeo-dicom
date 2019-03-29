/*
 * (C) Copyright 2006-2011 Nuxeo SA (http://nuxeo.com/) and others.
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
 *     Thomas Roger <troger@nuxeo.com>
 */

package org.nuxeo.ecm.dicom.helpers;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;

/**
 * Object containing info about a DICOM file.
 * 
 * @since 10.10
 */
public final class DICOMInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    public static final Pattern PROP_PATTERN = Pattern.compile("^dcm:([\\w]+)=(.*)$", Pattern.CASE_INSENSITIVE);

    public static final DICOMInfo EMPTY_INFO = new DICOMInfo(null, null, null, null);

    public static final String TIME = "time";

    public static final String MODALITY = "modality";

    public static final String FRAMES = "frames";

    public static final String TAGS = "tags";

    private final Double time;

    private final Long frames;

    private final String modality;

    private final List<String> tags;

    /**
     * Build a {@code DICOMInfo} from a {@code Map} of attributes.
     * <p>
     * Used when creating a {@code DICOMInfo} from a {@code DocumentModel} property.
     */
    public static DICOMInfo fromMap(Map<String, Serializable> map) {
        Double time = (Double) map.get(TIME);
        Long frames = (Long) map.get(FRAMES);
        String modality = (String) map.get(MODALITY);

        List<String> tags = new ArrayList<String>();
        @SuppressWarnings("unchecked")
        List<String> streamItems = (List<String>) map.get(TAGS);
        if (streamItems != null) {
            for (String m : streamItems) {
                tags.add(m);
            }
        }

        return new DICOMInfo(time, frames, modality, tags);
    }

    /**
     * Build a {@code DICOMInfo} from `identify` output.
     */
    public static DICOMInfo fromIdentify(List<String> output) {
        Double time = null;
        Long frames = null;
        String modality = null;
        // Flatten list to unique values
        Set<String> tags = new TreeSet<String>();

        for (String line : output) {
            Matcher matcher = PROP_PATTERN.matcher(line);
            try {
                if (matcher.find()) {
                    String key = matcher.group(1);
                    String val = matcher.group(2);
                    if ("Modality".equals(key)) {
                        modality = val;
                    } else if ("FrameTime".equals(key)) {
                        time = Double.parseDouble(val);
                    } else if ("NumberofFrames".equals(key)) {
                        frames = Long.parseLong(val);
                    } else {
                        tags.add(line.trim());
                    }
                }
            } catch (NumberFormatException nfe) {
                // ignore
            }
        }
        return new DICOMInfo(time, frames, modality, tags);
    }

    private DICOMInfo(Double time, Long frames, String modality, Collection<String> tags) {
        this.time = time;
        this.frames = frames;
        this.modality = modality;
        this.tags = new ArrayList<String>();
        if (tags != null) {
            this.tags.addAll(tags);
        }
    }

    /**
     * Returns the duration of the video.
     */
    public Double getTime() {
        return time;
    }

    /**
     * Returns the width of the video.
     */
    public Long getFrames() {
        return frames;
    }

    /**
     * Returns the height of the video.
     */
    public String getModality() {
        return modality;
    }

    /**
     * Returns all the {@link Stream}s of the video.
     */
    public List<String> getTags() {
        return tags;
    }

    /**
     * Returns a {@code Map} of attributes for this {@code DICOMInfo}.
     * <p>
     * Used when saving this {@code Stream} to a {@code DocumentModel} property.
     */
    public Map<String, Serializable> toMap() {
        Map<String, Serializable> map = new HashMap<String, Serializable>();
        if (time != null) {
            map.put(TIME, time);
        }
        if (frames != null) {
            map.put(FRAMES, frames);
        }
        if (modality != null) {
            map.put(MODALITY, modality);
        }
        if (tags != null) {
            map.put(TAGS, (Serializable) tags);
        }

        return map;
    }

}
