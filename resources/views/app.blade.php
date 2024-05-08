<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    {{-- <meta name="csrf-token" content="{{ csrf_token() }}"> --}}
        {{-- toegevoegd om 419 te vermijden van registerform, nadat de register.get route was geschrapt. Zie mails/aantekeningen 75/2024 voor details. ONNODIG volgens doc Inertia. --}}
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    {{-- <script src="https://cdn.tailwindcss.com"></script> --}}
</head>
<body>
    @inertia
</body>
</html>
