package com.audisoft.sample.controller;

import com.audisoft.common.dto.ApiResponse;
import com.audisoft.sample.entity.Sample;
import com.audisoft.sample.service.SampleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sample")
@RequiredArgsConstructor
public class SampleController {
    private final SampleService sampleService;

    @PostMapping
    public ResponseEntity<ApiResponse<Sample>> createSample(
            @RequestParam Long userId,
            @RequestBody SampleRequest request) {
        Sample sample = sampleService.createSample(userId, request.title, request.content, request.description);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Sample created successfully", sample));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Sample>> getSample(@PathVariable Long id) {
        Sample sample = sampleService.getSample(id);
        return ResponseEntity.ok(ApiResponse.success("Sample retrieved", sample));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<ApiResponse<List<Sample>>> getUserSamples(@PathVariable Long userId) {
        List<Sample> samples = sampleService.getUserSamples(userId);
        return ResponseEntity.ok(ApiResponse.success("User samples retrieved", samples));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Sample>>> getAllSamples() {
        List<Sample> samples = sampleService.getAllSamples();
        return ResponseEntity.ok(ApiResponse.success("All samples retrieved", samples));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Sample>> updateSample(
            @PathVariable Long id,
            @RequestParam Long userId,
            @RequestBody Sample sampleData) {
        Sample updatedSample = sampleService.updateSample(id, userId, sampleData);
        return ResponseEntity.ok(ApiResponse.success("Sample updated", updatedSample));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteSample(
            @PathVariable Long id,
            @RequestParam Long userId) {
        sampleService.deleteSample(id, userId);
        return ResponseEntity.ok(ApiResponse.success("Sample deleted", null));
    }

    public static class SampleRequest {
        public String title;
        public String content;
        public String description;
    }
}
