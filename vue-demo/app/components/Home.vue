<template>
  <Page>
    <ActionBar title="NativeFlix" />
    
    <ListView
        height="100%"
        separatorColor="transparent"
        for="item in flicks"
        @itemTap="onFlickTap">
        <v-template>
            <GridLayout
                height="280"
                borderRadius="10"
                class="bg-secondary"
                rows="*, auto, auto"
                columns="*"
                margin="5 10"
                padding="0">
              <Image
                row="0"
                margin="0"
                stretch="aspectFill"
                :src="item.image" />
              <Label
                row="1"
                margin="10 10 0 10"
                fontWeight="700"
                class="text-primary"
                fontSize="18"
                :text="item.title" />
              <Label
                row="2"
                margin="0 10 10 10"
                class="text-secondary"
                fontSize="14"
                textWrap="true"
                :text="item.description" />
            </GridLayout>
          </v-template>
    </ListView>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import FlickService from '../services/FlickService';
  import Details from './Details.vue';

  const flickService = new FlickService();

  export default Vue.extend({
    data() {
      return {
        flicks: flickService.getFlicks()
      }
    },
    methods: {
      onFlickTap(args) {
        const id = args.item.id;
        this.$navigateTo(Details, {
          props: {id}
        });
      }
    }
  });
</script>
