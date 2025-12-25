package com.audisoft.user.service;

import com.audisoft.common.exception.ResourceNotFoundException;
import com.audisoft.user.entity.UserProfile;
import com.audisoft.user.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserProfileRepository userProfileRepository;

    public UserProfile getUserProfile(Long userId) {
        return userProfileRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User profile not found"));
    }

    public UserProfile updateUserProfile(Long userId, UserProfile profileData) {
        UserProfile profile = getUserProfile(userId);

        if (profileData.getBio() != null) {
            profile.setBio(profileData.getBio());
        }
        if (profileData.getAvatarUrl() != null) {
            profile.setAvatarUrl(profileData.getAvatarUrl());
        }
        if (profileData.getPhoneNumber() != null) {
            profile.setPhoneNumber(profileData.getPhoneNumber());
        }
        if (profileData.getAddress() != null) {
            profile.setAddress(profileData.getAddress());
        }

        return userProfileRepository.save(profile);
    }
}
