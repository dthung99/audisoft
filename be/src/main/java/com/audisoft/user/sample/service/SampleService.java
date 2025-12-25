package com.audisoft.sample.service;

import com.audisoft.common.exception.ResourceNotFoundException;
import com.audisoft.sample.entity.Sample;
import com.audisoft.sample.repository.SampleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SampleService {
    private final SampleRepository sampleRepository;

    public Sample createSample(Long userId, String title, String content, String description) {
        Sample sample = new Sample();
        sample.setUserId(userId);
        sample.setTitle(title);
        sample.setContent(content);
        sample.setDescription(description);
        return sampleRepository.save(sample);
    }

    public Sample getSample(Long id) {
        return sampleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Sample not found with id: " + id));
    }

    public Sample getSample(Long id, Long userId) {
        return sampleRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new ResourceNotFoundException("Sample not found"));
    }

    public List<Sample> getUserSamples(Long userId) {
        return sampleRepository.findUserSamplesRecent(userId);
    }

    public Sample updateSample(Long id, Long userId, Sample sampleData) {
        Sample sample = getSample(id, userId);

        if (sampleData.getTitle() != null) {
            sample.setTitle(sampleData.getTitle());
        }
        if (sampleData.getContent() != null) {
            sample.setContent(sampleData.getContent());
        }
        if (sampleData.getDescription() != null) {
            sample.setDescription(sampleData.getDescription());
        }

        return sampleRepository.save(sample);
    }

    public void deleteSample(Long id, Long userId) {
        Sample sample = getSample(id, userId);
        sampleRepository.delete(sample);
    }

    public List<Sample> getAllSamples() {
        return sampleRepository.findAll();
    }
}
