<template>
  <div class="search-input">
    <label for="search" class="sr-only">Search</label>
    <div class="flex relative">
      <ais-instant-search :search-client="searchClient" index-name="packages" class="w-full">
        <ais-autocomplete>
          <div slot-scope="{ currentRefinement, indices, refine }" class="relative">
            <input
              id="search"
              type="search"
              class="form-input block w-full sm:text-sm sm:leading-5"
              placeholder="Search library or components"
              autocomplete="off"
              :value="currentRefinement"
              @input="refine($event.currentTarget.value)"
            />
            <div v-if="currentRefinement" class="absolute w-full border rounded mt-1 shadow-md">
              <ul v-for="index in indices" :key="index.label">
                <li>
                  <ul>
                    <li
                      v-for="hit in index.hits"
                      :key="hit.objectID"
                      class="bg-white py-3 px-2 w-full border-b hover:bg-gray-100 cursor-pointer"
                    >
                      <router-link :to="hit.packageName">
                        <div>
                          <p class="font-semibold">
                            <ais-highlight attribute="packageName" :hit="hit" />
                          </p>

                          <p>
                            <ais-highlight attribute="description" :hit="hit" />
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </ais-autocomplete>
      </ais-instant-search>
    </div>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

export default {
  data() {
    return {
      searchClient: algoliasearch(
        process.env.VUE_APP_ALGOLIA_APP_ID,
        process.env.VUE_APP_ALGOLIA_API_KEY
      )
    };
  }
};
</script>

<style>
.search-input {
  font-family: sans-serif;
  padding: 1em;
}
</style>
