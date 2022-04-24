package com.example.backend.controllers;

import com.example.backend.dto.request.LoginRequestDto;
import com.example.backend.dto.request.RegistrationRequestDto;
import com.example.backend.dto.request.UserRequestDto;
import com.example.backend.dto.response.LoginResponseDto;
import com.example.backend.dto.response.RegistrationResponseDto;
import com.example.backend.dto.response.UserResponseDto;
import com.example.backend.helper.JwtHelper;
import com.example.backend.security.JwtService;
import com.example.backend.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@Validated
@CrossOrigin
@RequestMapping("api/user")
public class UserController {
    private final UserService userService;
    private final JwtService jwtService;

    public UserController(UserService registrationService, JwtService jwtService) {
        this.userService = registrationService;
        this.jwtService = jwtService;
    }

    @PutMapping(value = "/updateCredentials")
    public ResponseEntity<UserResponseDto> updateCredentials(HttpServletRequest request, @Valid @RequestBody UserRequestDto userRequestDto){
        var jwtToken = JwtHelper.parseJwt(request);
        var usernameAlt = jwtService.getUserNameFromJwtToken(jwtToken);

        UserResponseDto user = userService.updateUserCredentials(userRequestDto, usernameAlt, jwtToken);

        if(user == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping(value="test")
    public ResponseEntity getInfo(){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
