<script>
  import Brain from "../components/Brain.svelte";
</script>

<div class="bg-gray-50 h-screen">
  <header class="flex border-b  h-20 shadow-sm">
    <div class="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
      <a
        href="#"
        class="flex  h-20 w-20 items-center justify-center bg-gray-200"
      >
        <svg viewBox="0 0 94 74" class="css-1j8o68f p-2"
          ><defs id="SvgjsDefs22865" /><g
            id="SvgjsG22866"
            featurekey="symbolFeature-0"
            transform="matrix(1.072978755844164,0,0,1.072978755844164,-8.151146525427805,-17.59373429916593)"
            fill="#111111"
            ><path
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#111111"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M21.3,59.7c-5.1,5.1-5.3,12.6,0.7,18.7  c5.8,5.9,13.7,5.3,18.7,0.4c2.5-2.4,33-33,38-38.1s5.5-13.3-0.7-19.5c-6.2-6.2-14.7-3.7-18.5,0.3c-3.9,4-19.2,19.4-19.2,19.4  S24.5,56.6,21.3,59.7z"
            /><path
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#111111"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M78.8,59.7c5.1,5.1,5.3,12.6-0.7,18.7  c-5.8,5.9-13.7,5.3-18.7,0.4c-2.5-2.4-33-33-38-38.2S15.8,27.2,22.1,21s14.7-3.7,18.5,0.3s19.2,19.4,19.2,19.4S75.7,56.6,78.8,59.7z  "
            /><path
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#111111"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M50,16.4c5.2,0,7.8,3.5,10.8,6.2  c3.8,3.5,12.4,12,12.4,12S85.1,47.4,87.7,50c2.6,2.6,8.6,10.6,0.8,18.4c-7.8,7.7-16.7,3.2-20.2-0.1C64.8,65.1,50,50.1,50,50.1  S34.4,34.8,30.5,30.7c-3.9-4-12-6.5-18.2-0.3s-5.5,14.4-0.6,19.5c5,5.1,22.5,22.7,25,25.2c2.6,2.6,6.8,8.4,13.3,8.4  c5.8,0,8.4-4,11.5-7.1c3.1-3.1,16-16,16-16s8.4-8.3,11-11.1c2.6-2.8,5.4-12.9-1.4-18.8S72.8,27.2,70,29.9  c-2.8,2.8-19.2,19.5-19.2,19.5S34.2,65.3,31.2,68.3c-3.1,3-13,7.2-19.1,1.1S6.6,55,10.9,50.8s18.8-19.4,18.8-19.4S37.4,24,40.4,21  C42.7,18.8,45.1,16.3,50,16.4z"
            /></g
          ></svg
        >
      </a>
    </div>
    <div class="mx-auto md:hidden">
      <div class="relative">
        <label for="inbox-select" class="sr-only">Choose inbox</label>
        <select
          id="inbox-select"
          class="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600"
          ><option value="Open">Open</option><option value="Archive"
            >Archive</option
          ><option value="Customers">Customers</option><option value="Flagged"
            >Flagged</option
          ><option value="Spam">Spam</option><option value="Drafts"
            >Drafts</option
          ></select
        >
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2"
        >
          <svg
            class="h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            ><path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            /></svg
          >
        </div>
      </div>
    </div>
    <div
      class="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:hidden"
    >
      <button
        type="button"
        class="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        ><span class="sr-only">Open main menu</span>
        <svg
          class="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          /></svg
        ></button
      >
    </div>
    <div
      class="hidden md:flex md:min-w-0 md:flex-1 md:items-center md:justify-between"
    >
      <div class="min-w-0 flex-1">
        <div
          class="relative max-w-2xl text-gray-400 focus-within:text-gray-500"
        >
          <label for="desktop-search" class="sr-only">Search</label>
          <input
            id="desktop-search"
            type="search"
            placeholder="Search"
            class="block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent focus:ring-0 sm:text-sm"
          />
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              /></svg
            >
          </div>
        </div>
      </div>
      <div class="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4">
        <nav aria-label="Global" class="flex space-x-10">
          <a href="#" class="text-sm font-medium text-gray-900">Inboxes</a>
          <a href="#" class="text-sm font-medium text-gray-900">Reporting</a>
          <a href="#" class="text-sm font-medium text-gray-900">Settings</a>
        </nav>
        <div class="flex items-center space-x-8">
          <span class="inline-flex"
            ><a
              href="#"
              class="-mx-1 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500"
              ><span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                /></svg
              ></a
            ></span
          >
          <div class="relative inline-block text-left">
            <button
              type="button"
              class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              id="menu-0-button"
              aria-expanded="false"
              aria-haspopup="true"
              ><span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              /></button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
      <div
        class="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75"
      />
      <div class="fixed inset-0 z-40">
        <div
          class="fixed inset-0 z-40 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg"
          aria-label="Global"
        >
          <div class="flex h-16 items-center justify-between px-4 sm:px-6">
            <a href="#"
              ><img
                class="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
                alt="Your Company"
              /></a
            >
            <button
              type="button"
              class="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              ><span class="sr-only">Close main menu</span>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                /></svg
              ></button
            >
          </div>
          <div class="max-w-8xl mx-auto mt-2 px-4 sm:px-6">
            <div class="relative text-gray-400 focus-within:text-gray-500">
              <label for="mobile-search" class="sr-only"
                >Search all inboxes</label
              >
              <input
                id="mobile-search"
                type="search"
                placeholder="Search all inboxes"
                class="block w-full rounded-md border-gray-300 pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"
              />
              <div
                class="absolute inset-y-0 left-0 flex items-center justify-center pl-3"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  ><path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  /></svg
                >
              </div>
            </div>
          </div>
          <div class="max-w-8xl mx-auto py-3 px-2 sm:px-4">
            <a
              href="#"
              class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >Inboxes</a
            >
            <a
              href="#"
              class="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
              >Technical Support</a
            >
            <a
              href="#"
              class="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
              >Sales</a
            >
            <a
              href="#"
              class="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
              >General</a
            >
            <a
              href="#"
              class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >Reporting</a
            >
            <a
              href="#"
              class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >Settings</a
            >
          </div>
          <div class="border-t border-gray-200 pt-4 pb-3">
            <div class="max-w-8xl mx-auto flex items-center px-4 sm:px-6">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
              </div>
              <div class="ml-3 min-w-0 flex-1">
                <div class="truncate text-base font-medium text-gray-800">
                  Whitney Francis
                </div>
                <div class="truncate text-sm font-medium text-gray-500">
                  whitney.francis@example.com
                </div>
              </div>
              <a
                href="#"
                class="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
                ><span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  /></svg
                ></a
              >
            </div>
            <div class="max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4">
              <a
                href="#"
                class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                >Your Profile</a
              >
              <a
                href="#"
                class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
