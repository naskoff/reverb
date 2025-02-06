<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $password = \Hash::make('secret');

        User::factory()
            ->count(2)
            ->sequence(
                ['name' => 'John Doe', 'email' => 'john@doe.com', 'password' => $password],
                ['name' => 'Jane Doe', 'email' => 'jane@doe.com', 'password' => $password],
            )
            ->create();
    }
}
