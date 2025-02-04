<?php

use App\Models\User;

test('test create token', function () {
    $email = 'test@test.com';
    $password = 'password';

    User::factory()->create([
        'email' => $email,
        'password' => $password,
    ]);

    $response = $this->postJson('/api/auth', [
        'email' => $email,
        'password' => $password,
    ]);

    expect($response->getStatusCode())->toEqual(200)
        ->and($response->getData())->toHaveProperty('token');
});

test('test token with invalid data return error', function (string $email, string $password, string $error = 'The provided credentials are incorrect.') {
    $response = $this->postJson('/api/auth', [
        'email' => $email,
        'password' => $password,
    ]);

    expect($response->getStatusCode())->toEqual(422)
        ->and($response->json())->toHaveKey('message')
        ->and($response->json('message'))->toBe($error);
})->with([
    ['invalid-email', 'password', 'The email field must be a valid email address.'],
    ['non-exist-email@example.com', 'password'],
    ['test@example.com', 'invalid-password'],
]);
