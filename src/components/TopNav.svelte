<script>
	// import Banner from './Banner.astro'
	// import MobileMenu from './MobileMenu.svelte'
</script>

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
	<!-- <MobileMenu /> -->

	<header class="relative bg-white">
		<!-- <Banner /> -->

		<nav aria-label="Top" class=" border-b border-gray-200 px-4 sm:px-6 lg:px-8">
			<div>
				<div class="h-16 flex items-center">
					<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
					<button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden">
						<span class="sr-only">Open menu</span>
						<!-- Heroicon name: outline/menu -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>

					<!-- Logo -->
					<div class="ml-4 flex lg:ml-0">
						<a href="/">
							<span class="sr-only">Workflow</span>
							<img class="h-4 w-auto" src="/logo_white_bg.png" alt="" />
						</a>
					</div>

					<!-- Flyout menus -->
					<div class="hidden lg:ml-8 lg:block lg:self-stretch">
						<div class="h-full flex space-x-8">
							

							

							<a
								href="/pokemon"
								class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
								>Pokemon</a
							>
							<a
								href="/blog"
								class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
								>Blog</a
							>
						</div>
					</div>

					<div class="ml-auto flex items-center">
						<!-- Search -->
						<div class="flex lg:mr-6">
							<a href="#" class="p-2 text-gray-400 hover:text-gray-500">
								<span class="sr-only">Search</span>
								<!-- Heroicon name: outline/search -->
								<svg
									class="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</a>
						</div>
						<div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
							<a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
							<span class="h-6 w-px bg-gray-200" aria-hidden="true" />
							<a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800"
								>Create account</a
							>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
</div>
