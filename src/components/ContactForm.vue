<template>
  <form
    class="flex flex-col p-6 my-4 md:my-8 text-sm leading-6 text-red-600 bg-white rounded-xl max-w-3xl"
  >
    <h3 class="text-xl font-semibold leading-7 text-neutral-900 max-md:max-w-full">
      Kontaktní údaje
    </h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 my-8">
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="first_name"
          id="first_name"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="first_name"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Jméno</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="last_name"
          id="last_name"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="last_name"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Příjmení</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="email"
          name="email"
          id="email"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="email"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="phone-number"
          id="phone-number"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="phone-number"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Telefon</label
        >
      </div>
    </div>

    <h3 class="text-xl font-semibold leading-7 text-neutral-900 max-md:max-w-full">
      Fakturační údaje
    </h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 my-8">
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="company-name"
          id="company-name"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="company-name"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Název firmy</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="street-name"
          id="street-name"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="street-name"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Ulice</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="city-name"
          id="city-name"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="city-name"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Město</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="zip-code"
          id="zip-code"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="zip-code"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >PSČ</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="company-id"
          id="company-id"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="company-id"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >IČ</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="tax-id"
          id="tax-id"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="tax-id"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >DIČ</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="cpy-first_name"
          id="cpy-first_name"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="cpy-first_name"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Jméno</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="cpy-last_name"
          id="cpy-last_name"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="cpy-last_name"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Příjmení</label
        >
      </div>

      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="cpy-phone-number"
          id="cpy-phone-number"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="cpy-phone-number"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Telefon</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="email"
          name="cpy-email"
          id="cpy-email"
          class="block p-3 w-full text-sm text-neutral-500 bg-gray-100 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="cpy-email"
          class="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email</label
        >
      </div>
    </div>

    <button
      class="lg:w-max justify-center px-6 py-3 text-base font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
    >
      Uložit změny
    </button>
  </form>
</template>
