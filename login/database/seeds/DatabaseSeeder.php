<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('liquens')->insert([
            "name" => 'nada',
            "img" => "https://lh6.ggpht.com/y7yXjzHNzVDpZPyrhg8pOIuPiSRRK0zppeHgoCseX8-KOVk19Cv8lF6eJelYXqF0zg=h900",
            "content" => "alksjda sdlak sldk alskd laks dlka slkd alks dlka sdlka lskd alks dlka lksd"
        ]);

        \DB::table('liquens')->insert([
            "name" => 'flor',
            "img" => "https://lh6.ggpht.com/y7yXjzHNzVDpZPyrhg8pOIuPiSRRK0zppeHgoCseX8-KOVk19Cv8lF6eJelYXqF0zg=h900",
            "content" => "alksa,sdkjda sdlak sldk alskd laks dlka slkd alks dlka sdlka lskd alks dlka lksd"
        ]);

        \DB::table('liquens')->insert([
            "name" => 'abc',
            "img" => "https://lh6.ggpht.com/y7yXjzHNzVDpZPyrhg8pOIuPiSRRK0zppeHgoCseX8-KOVk19Cv8lF6eJelYXqF0zg=h900",
            "content" => "alksjda sdlak slks dlka lksd"
        ]);
    }
}
