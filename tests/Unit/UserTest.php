<?php

namespace Tests\Unit;

use App\Models\User;

describe('test user model', function () {
    it('test create model', function () {
        User::factory()->create([
            'email' => 'test@test.com',
        ]);

        $this->assertDatabaseHas('users', [
            'email' => 'test@test.com',
        ]);
    });
});
