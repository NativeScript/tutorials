<template>
  <Page>
    <ActionBar title="NativeFlix" />
    
    <ListView
        height="100%"
        separatorColor="transparent"
        :items="flicks"
        @itemTap="onFlickTap">
        <template #default="{ item }">
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
          </template>
    </ListView>
  </Page>
</template>

<script lang="ts">
  import { defineComponent } from "nativescript-vue";
  import FlickService from '../services/FlickService';
  import Details from './Details.vue';
  import type { FlickModel } from '../models/Flick';

  const flickService = new FlickService();

  export default defineComponent({
    data() {
      return {
        flicks: flickService.getFlicks() as FlickModel[]
      }
    },
    methods: {
      onFlickTap(args: { item?: FlickModel; index?: number }) {
        const item = args.item || (typeof args.index === 'number' ? this.flicks[args.index] : undefined);
        if (!item) {
          return;
        }
        const id = item.id;
        this.$navigateTo(Details, {
          props: { id }
        });
      }
    }
  });
</script>
