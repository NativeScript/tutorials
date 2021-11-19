<template>
  <Page>
    <ActionBar :title="flick.title"/>

    <ScrollView height="100%">
        <StackLayout>
            <Image
                margin="0"
                stretch="aspectFill"
                :src="flick.image" />
            <StackLayout padding="10 20">
                <StackLayout v-for="detail in flick.details" :key="detail.id">
                    <Label
                        marginTop="15"
                        fontSize="16"
                        fontWeight="700"
                        class="text-primary"
                        textWrap="true"
                        :text="detail.title" />
                    <Label
                        fontSize="14"
                        class="text-secondary"
                        textWrap="true"
                        :text="detail.body" />
                </StackLayout>
            </StackLayout>
        </StackLayout>
    </ScrollView>
</Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import FlickService from '../services/FlickService';
  
  const flickService = new FlickService();

  export default Vue.extend({
    props: ['id'],
    data() {
        return {
            flick: flickService.getFlickById(this.id)
        }
    }
  });
</script>
