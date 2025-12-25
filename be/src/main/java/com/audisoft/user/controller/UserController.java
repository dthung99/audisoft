package com.audisoft.user.controller;

import com.audisoft.common.dto.ApiResponse;
import com.audisoft.user.entity.UserProfile;
import com.audisoft.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{userId}/profile")
    public ResponseEntity<ApiResponse<UserProfile>> getUserProfile(@PathVariable Long userId) {
        UserProfile profile = userService.getUserProfile(userId);
        return ResponseEntity.ok(ApiResponse.success("Profile retrieved", profile));
    }

    @PutMapping("/{userId}/profile")
    public ResponseEntity<ApiResponse<UserProfile>> updateUserProfile(
            @PathVariable Long userId,
            @RequestBody UserProfile profileData) {
        UserProfile updatedProfile = userService.updateUserProfile(userId, profileData);
        return ResponseEntity.ok(ApiResponse.success("Profile updated", updatedProfile));
    }
}
