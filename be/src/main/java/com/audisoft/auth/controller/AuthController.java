package com.audisoft.auth.controller;

import com.audisoft.auth.entity.User;
import com.audisoft.auth.service.AuthService;
import com.audisoft.common.dto.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<User>> register(
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String firstName,
            @RequestParam String lastName) {
        User user = authService.registerUser(email, password, firstName, lastName);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("User registered successfully", user));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<Map<String, Object>>> login(
            @RequestParam String email,
            @RequestParam String password) {
        User user = authService.loginUser(email, password);
        Map<String, Object> response = new HashMap<>();
        response.put("user", user);
        response.put("token", "JWT_TOKEN_HERE");
        return ResponseEntity.ok(ApiResponse.success("Login successful", response));
    }

    @GetMapping("/me")
    public ResponseEntity<ApiResponse<User>> getCurrentUser(@RequestParam Long userId) {
        User user = authService.getUserById(userId);
        return ResponseEntity.ok(ApiResponse.success("User retrieved", user));
    }
}
