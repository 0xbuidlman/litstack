<?php

namespace Lit;

use Ignite\Application\Kernel as LitstackKernel;

class Kernel extends LitstackKernel
{
    /**
     * Lit application service providers.
     *
     * @var array
     */
    public $providers = [
        Providers\LitstackServiceProvider::class,
        Providers\LivewireServiceProvider::class,
        Providers\LocalizationServiceProvider::class,
    ];
}
