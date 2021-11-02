import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { FlickService } from "../services";

type DetailsScreenProps = {
    route: RouteProp<MainStackParamList, "Details">,
    navigation: FrameNavigationProp<MainStackParamList, "Details">,
}

export function DetailsScreen({ route }: DetailsScreenProps) {
    const flickId = route.params.flickId;
    const flick = FlickService.getFlickById(flickId);

    return (
        <scrollView height="100%">
            <stackLayout>
                <image
                    margin="0"
                    stretch="aspectFill"
                    src={flick?.image}/>
                <stackLayout padding="10 20">
                    {
                        flick.details.map((flickDetails, index) => (
                            <stackLayout key={index}>
                                <label
                                    marginTop="15"
                                    fontSize="16"
                                    fontWeight="700"
                                    class="text-primary"
                                    textWrap="true"
                                    text={flickDetails.title}/>
                                <label
                                    fontSize="14"
                                    class="text-secondary"
                                    textWrap="true"
                                    text={flickDetails.body}/>  
                            </stackLayout>
                        ))
                    }
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}
