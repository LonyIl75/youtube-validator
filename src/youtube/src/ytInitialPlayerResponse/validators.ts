//@ts-nocheck

import * as Yup from 'yup';
import * as ytInitialData from './types.js';
import { makeOptionalIfNested_top } from '@/shared/yup/types.js';
import {YtConfig} from '../YtConfig/YtConfig.js';

const YupVldSchOf_ResourceStatus : Yup.ObjectSchema<makeOptionalIfNested_top<makeOptionalIfNested_top<ytInitialData.ResourceStatus>>> =  Yup.object({
        identifier:Yup.string().required(),//XXX
        status:Yup.string().required(),//XXX
});

    const YupVldSchOf_ResourceStatusInResponseCheck : Yup.ObjectSchema<makeOptionalIfNested_top< ytInitialData.ResourceStatusInResponseCheck>> = Yup.object({
        resourceStatuses:Yup.array().of(YupVldSchOf_ResourceStatus).required(),//XXX
        serverBuildLabel:Yup.string().required(),//XXX
    });
    
    const YupVldSchOf_TemplateUpdate : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TemplateUpdate>> = Yup.object({
        identifier:Yup.string().required(),//XXX
        serializedTemplateConfig:Yup.string().required(),//XXX
        dependencies:Yup.array().of(Yup.string()).notRequired(),//XXX
    });

        const YupVldSchOf_Update :  Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Update>>  = Yup.object({
            templateUpdate: YupVldSchOf_TemplateUpdate.notRequired().default(null).nullable(),//XXX
            resourceStatusInResponseCheck: YupVldSchOf_ResourceStatusInResponseCheck.notRequired().default(null).nullable(),//XXX
        });

            
            const YupVldSchOf_ElementUpdate : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ElementUpdate>> = Yup.object({
                updates:Yup.array().of(YupVldSchOf_Update),//XXX
            });

const YupVldSchOf_Timestamp : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Timestamp>> = Yup.object({
    seconds:Yup.string().required(),//XXX
    nanos:Yup.number().required(),//XXX
});

    const YupVldSchOf_EntityBatchUpdate : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EntityBatchUpdate>> = Yup.object({
        mutations: Yup.array().of(Yup.mixed().nullable()),//XXX // TODO : rajouter  //{"entityKey":"EgZ0b3BiYXIg9QEoAQ%3D%3D","type":"ENTITY_MUTATION_TYPE_DELETE","options":{"persistenceOption":"ENTITY_PERSISTENCE_OPTION_INMEMORY_AND_PERSIST"});}),,
        timestamp:YupVldSchOf_Timestamp,//XXX
    });

        export const YupVldSchOf_ResponseFrameworkUpdates : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ResponseFrameworkUpdates>> = Yup.object({
            entityBatchUpdate:YupVldSchOf_EntityBatchUpdate,//XXX
            elementUpdate:YupVldSchOf_ElementUpdate,//XXX
        });

const YupVldSchOf_AnimationConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AnimationConfig>> = Yup.object({
        minImageUpdateIntervalMs:Yup.number().required(),//XXX
        crossfadeDurationMs:Yup.number().required(),//XXX
        crossfadeStartOffset:Yup.number().required(),//XXX
         maxFrameRate:Yup.number().required(),//XXX
});


    const YupVldSchOf_CinematicContainerRendererConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CinematicContainerRendererConfig>> = Yup.object({
        lightThemeBackgroundColor:Yup.number().required(),//XXX
        darkThemeBackgroundColor:Yup.number().required(),//XXX
        animationConfig:YupVldSchOf_AnimationConfig,//XXX
        colorSourceSizeMultiplier:Yup.number().required(),//XXX
        applyClientImageBlur:Yup.boolean().required(),//XXX
        bottomColorSourceHeightMultiplier:Yup.number().required(),//XXX
        maxBottomColorSourceHeight:Yup.number().required(),//XXX
        colorSourceWidthMultiplier:Yup.number().required(),//XXX
        colorSourceHeightMultiplier:Yup.number().required(),//XXX
        blurStrength:Yup.number().required(),//XXX
        enableInLightTheme:Yup.boolean().required(),//XXX
    });

const YupVldSchOf_GradientColorConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.GradientColorConfig>> = Yup.object({
    darkThemeColor:Yup.number().required(),//XXX
    startLocation:Yup.number().notRequired(),//XXX
});

        const YupVldSchOf_CinematicContainerRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CinematicContainerRenderer>> = Yup.object({
            gradientColorConfig:Yup.array().of(YupVldSchOf_GradientColorConfig),//XXX
            presentationStyle:Yup.string().required(),//XXX
            config:YupVldSchOf_CinematicContainerRendererConfig,//XXX
        });

            export const YupVldSchOf_PageVisualEffect : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PageVisualEffect>> = Yup.object({
                cinematicContainerRenderer:YupVldSchOf_CinematicContainerRenderer,//XXX
            });

const YupVldSchOf_VisibilityClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VisibilityClass>> = Yup.object({
    types:Yup.string().required(),
});

    const YupVldSchOf_OfflineabilityEntityLoggingDirectives : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OfflineabilityEntityLoggingDirectives>> = Yup.object({
        trackingParams:Yup.string().required(),//XXX
        visibility:YupVldSchOf_VisibilityClass,//XXX
        enableDisplayloggerExperiment:Yup.boolean().required(),//XXX
    });


const YupVldSchOf_HeatMarkerRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HeatMarkerRenderer>> = Yup.object({
    timeRangeStartMillis:Yup.number().required(),//XXX
    markerDurationMillis:Yup.number().required(),//XXX
    heatMarkerIntensityScoreNormalized:Yup.number().required(),//XXX
});

    const YupVldSchOf_HeatMarker : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HeatMarker>> = Yup.object({
        heatMarkerRenderer: YupVldSchOf_HeatMarkerRenderer ,//XXX
    });

const YupVldSchOf_VisibleOnLoad : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VisibleOnLoad>> = Yup.object({
    key:Yup.string().matches('.*'),//XXX
});

const YupVldSchOf_ThumbnailOverlayResumePlaybackRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailOverlayResumePlaybackRenderer>> = Yup.object({
    percentDurationWatched:Yup.number().required(),//XXX
});


const YupVldSchOf_GetDownloadActionCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.GetDownloadActionCommand>> = Yup.object({
    videoId:Yup.string().required(),//XXX
    params:Yup.string().required(),//XXX
});

    const YupVldSchOf_FluffyOnAddCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyOnAddCommand>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        getDownloadActionCommand:YupVldSchOf_GetDownloadActionCommand,//XXX
    });

        const YupVldSchOf_FluffyOfflineVideoEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyOfflineVideoEndpoint>> = Yup.object({
            videoId:Yup.string().required(),//XXX
            onAddCommand:YupVldSchOf_FluffyOnAddCommand,//XXX
        });   

                                                           
            const YupVldSchOf_IndecentServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndecentServiceEndpoint>> = Yup.object({
                clickTrackingParams:Yup.string().required(),//XXX
                offlineVideoEndpoint:YupVldSchOf_FluffyOfflineVideoEndpoint,//XXX
            });

                const YupVldSchOf_ItemMenuServiceItemDownloadRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ItemMenuServiceItemDownloadRenderer>> = Yup.object({
                    serviceEndpoint:YupVldSchOf_IndecentServiceEndpoint,//XXX
                    trackingParams:Yup.string().required(),//XXX
                });


const YupVldSchOf_UIActions : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.UIActions>> = Yup.object({
    hideEnclosingContainer:Yup.boolean().required(),//XXX
});


              
const YupVldSchOf_PurpleMetadataBadgeRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleMetadataBadgeRenderer>> = Yup.object({
    style:Yup.string().required(),
    label:Yup.string().required(),
    trackingParams:Yup.string().required(),
});

    const YupVldSchOf_PurpleBadge : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleBadge>> = Yup.object({
        metadataBadgeRenderer:YupVldSchOf_PurpleMetadataBadgeRenderer,
    });


const YupVldSchOf_RelatedChipCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.RelatedChipCommand>> = Yup.object({//Add-
    targetSectionIdentifier:Yup.string().required(),//XXX 
    loadCached:Yup.boolean().required()//XXX 
});

const YupVldSchOf_HideEngagementPanelScrimAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HideEngagementPanelScrimAction>> = Yup.object({
    engagementPanelTargetId:Yup.string().required(),//XXX
});


const YupVldSchOf_ScrollToEngagementPanelCommandClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ScrollToEngagementPanelCommandClass>> = Yup.object({
    targetId:Yup.string().required(),//XXX
});


const YupVldSchOf_ColorMap : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ColorMap>> = Yup.object({
    key:Yup.string().required(), //XXX //"USER_INTERFACE_THEME_LIGHT" , "USER_INTERFACE_THEME_DARK"
    value:Yup.number().required(),//XXX //4279440147 , 4278607828
});

    const YupVldSchOf_StyleRunColorMapExtension : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StyleRunColorMapExtension>> = Yup.object({
        colorMap:Yup.array().of(YupVldSchOf_ColorMap),//XXX
    });

        const YupVldSchOf_StyleRunExtension : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StyleRunExtension>> = Yup.object({
            styleRunColorMapExtension:YupVldSchOf_StyleRunColorMapExtension,//XXX
        });

            const YupVldSchOf_StyleRun : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StyleRun>> = Yup.object({
                startIndex:Yup.number().required(),//XXX
                length:Yup.number().required(),//XXX
                styleRunExtensions:YupVldSchOf_StyleRunExtension,//XXX
            });

const YupVldSchOf_CommandRunLoggingDirectives : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommandRunLoggingDirectives>> = Yup.object({
    trackingParams:Yup.string().required(),
    enableDisplayloggerExperiment:Yup.boolean().required(),
});

const YupVldSchOf_StickyWebCommandMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyWebCommandMetadata>> = Yup.object({
    sendPost:Yup.boolean().required(),//XXX
});

const YupVldSchOf_CreateBackstagePostEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CreateBackstagePostEndpoint>> = Yup.object({
    createBackstagePostParams:Yup.string().required(),//XXX
});


const YupVldSchOf_CreateCommentReplyEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CreateCommentReplyEndpoint>> = Yup.object({
    createReplyParams:Yup.string().required(),
});

const YupVldSchOf_CreateCommentEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CreateCommentEndpoint>> = Yup.object({
    createCommentParams:Yup.string().required(),
});

const YupVldSchOf_SubscribeEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SubscribeEndpoint>> = Yup.object({
    channelIds:Yup.array().of(Yup.string()).required(),//XXX
    params:Yup.string().required(),//XXX
});




const YupVldSchOf_AdsEngagementPanelContentRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdsEngagementPanelContentRenderer>> = Yup.object({
    hack:Yup.boolean().required(),//XXX
});

    const YupVldSchOf_GetSurveyCommandEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.GetSurveyCommandEndpoint>> = Yup.object({
        watch:YupVldSchOf_AdsEngagementPanelContentRenderer,
    });

        const YupVldSchOf_GetSurveyCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.GetSurveyCommand>> = Yup.object({
            endpoint:YupVldSchOf_GetSurveyCommandEndpoint,
            action:Yup.string().required(),
        });



const YupVldSchOf_SubscriptionButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SubscriptionButton>> = Yup.object({
    type:Yup.string().required(),//XXX
});


const YupVldSchOf_PurpleGetDownloadActionCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleGetDownloadActionCommand>> = Yup.object({
    videoId:Yup.string().required(),//XXX
    params:Yup.string().required(),//XXX
    offlineabilityEntityKey:Yup.string().required(),//XXX
});

    const YupVldSchOf_PurpleOnAddCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleOnAddCommand>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        getDownloadActionCommand:YupVldSchOf_PurpleGetDownloadActionCommand,//XXX
    });

        const YupVldSchOf_PurpleOfflineVideoEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleOfflineVideoEndpoint>> = Yup.object({
            videoId:Yup.string().required(),//XXX
            onAddCommand:YupVldSchOf_PurpleOnAddCommand,//XXX
        });

            const YupVldSchOf_TentacledServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledServiceEndpoint>> = Yup.object({
                clickTrackingParams:Yup.string().required(),//XXX
                offlineVideoEndpoint:YupVldSchOf_PurpleOfflineVideoEndpoint,//XXX
            });
            
                const YupVldSchOf_MenuItemMenuServiceItemDownloadRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuItemMenuServiceItemDownloadRenderer>> = Yup.object({
                    serviceEndpoint:YupVldSchOf_TentacledServiceEndpoint,//XXX
                    trackingParams:Yup.string().required(),//XXX
                });


const YupVldSchOf_FluffyWebCommandMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyWebCommandMetadata>> = Yup.object({
    sendPost:Yup.boolean().required(),//XXX
    apiUrl:Yup.string().notRequired(),//XXX
});

    const YupVldSchOf_AddToWatchLaterCommandCommandMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AddToWatchLaterCommandCommandMetadata>> = Yup.object({
        webCommandMetadata:YupVldSchOf_FluffyWebCommandMetadata,//XXX
    });


const YupVldSchOf_GetTranscriptEndpointClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.GetTranscriptEndpointClass>> = Yup.object({
    params:Yup.string().required(),//XXX
});

const YupVldSchOf_IconType = Yup.mixed<typeof ytInitialData.IconType [keyof typeof ytInitialData.IconType]>().oneOf(Object.values(ytInitialData.IconType));
    const YupVldSchOf_Icon : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Icon>> = Yup.object({
        iconType:YupVldSchOf_IconType,//XXX //enum ? A FAIRE 
    });

const YupVldSchOf_SubtitleRun : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SubtitleRun>> = Yup.object({
    text:Yup.string().required(),//XXX
});

    const YupVldSchOf_Subtitle : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Subtitle>> = Yup.object({
        runs:Yup.array().of(YupVldSchOf_SubtitleRun),//XXX
    });


const YupVldSchOf_PrefetchHintConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PrefetchHintConfig>> = Yup.object({
    prefetchPriority:Yup.number().required(),//XXX
    countdownUiRelativeSecondsPrefetchCondition:Yup.number().required(),//XXX
});

    const YupVldSchOf_WatchEndpointSupportedPrefetchConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WatchEndpointSupportedPrefetchConfig>> = Yup.object({
        prefetchHintConfig:YupVldSchOf_PrefetchHintConfig,//XXX
    });

        const YupVldSchOf_AutoplayVideoWatchEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AutoplayVideoWatchEndpoint>> = Yup.object({
            videoId:Yup.string().required(),//XXX
            params:Yup.string().required(),//XXX
            playerParams:Yup.string().required(),//XXX
            watchEndpointSupportedPrefetchConfig:YupVldSchOf_WatchEndpointSupportedPrefetchConfig,//XXX
        });

const YupVldSchOf_YtConfigData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.YtConfigData>> = Yup.object({
    visitorData:Yup.string().required(),//XXX
    sessionIndex:Yup.number().required(),//XXX
    rootVisualElementType:Yup.number().required(),//XXX
});



const YupVldSchOf_MainAppWebResponseContext : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MainAppWebResponseContext>> = Yup.object({
    datasyncId:Yup.string().notRequired(),//XXX
    loggedOut:Yup.boolean().required(),//XXX
    trackingParam:Yup.string().required(),//XXX
});


const YupVldSchOf_Param : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Param>> = Yup.object({
    key:Yup.string().required(),//XXX
    value:Yup.string().required(),//XXX
});

    const YupVldSchOf_ServiceTrackingParam : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ServiceTrackingParam>> = Yup.object({
        service:Yup.string().required(),//XXX
        params:Yup.array().of(YupVldSchOf_Param),//XXX
    });


    




//WEB_PAGE_TYPE_(?!CHANNEL|WATCH|UNKNOW|SHORTS|SEARCH|BROWSE) is empty 
const YupVldSchOf_WebPageType = Yup.mixed<typeof ytInitialData.WebPageType [keyof typeof ytInitialData.WebPageType]>().oneOf(Object.values(ytInitialData.WebPageType));

const YupVldSchOf_apiURL = Yup.string().matches('(?:\\/([-a-zA-Z0-9()@:%_\\+.~#?&=]+)+)+')

// A FAIRE apiUrl with regex_values ect 
//rootVe":\d+,"apiUrl":"(?!/youtubei/v1/browse) is empty 
const YupVldSchOf_APIURL = Yup.mixed<typeof ytInitialData.APIURL [keyof typeof ytInitialData.APIURL]>().oneOf(Object.values(ytInitialData.APIURL));

    const YupVldSchOf_PurpleWebCommandMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleWebCommandMetadata>> = Yup.object({
        url:Yup.string(),//.required(),//XXX // TODO :  if url == /youtubei/v1/next alors url undefined  
        webPageType:YupVldSchOf_WebPageType,//XXX
        rootVe:Yup.number(),//.required(),//XXX // TODO : if url == /youtubei/v1/next alors rootVe undefined 
        apiUrl: YupVldSchOf_apiURL.notRequired().default(null).nullable(),//YupVldSchOf_APIURL.notRequired().default(null).nullable(),//OOO
    });

        const YupVldSchOf_EndpointCommandMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EndpointCommandMetadata>> = Yup.object({
            webCommandMetadata:YupVldSchOf_PurpleWebCommandMetadata,//XXX
        });

            const YupVldSchOf_NavigationEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.NavigationEndpoint>> = Yup.object({
                clickTrackingParams:Yup.string().required(),//XXX
                commandMetadata:YupVldSchOf_EndpointCommandMetadata,//XXX
                watchEndpoint:YupVldSchOf_AutoplayVideoWatchEndpoint,//XXX
            });

                const YupVldSchOf_WebPrefetchData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WebPrefetchData>> = Yup.object({
                    navigationEndpoints:Yup.array().of(YupVldSchOf_NavigationEndpoint),//XXX
                });

                    export const YupVldSchOf_FluffyWebResponseContextExtensionData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyWebResponseContextExtensionData>> = Yup.object({
                        ytConfigData:YupVldSchOf_YtConfigData.notRequired().default(null).nullable(),//XXX
                        webPrefetchData:YupVldSchOf_WebPrefetchData.notRequired().default(null).nullable(),
                        hasDecorated:Yup.boolean().required(),
                    });

                        export const YupVldSchOf_ResponseResponseContext : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ResponseResponseContext>> = Yup.object({
                            serviceTrackingParams:Yup.array().of(YupVldSchOf_ServiceTrackingParam),//XXX
                            mainAppWebResponseContext:YupVldSchOf_MainAppWebResponseContext,//XXX
                            webResponseContextExtensionData:YupVldSchOf_FluffyWebResponseContextExtensionData,//XXX
                        });
                

                          

const YupVldSchOf_HeaderText : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HeaderText>> = Yup.object({
    simpleText:Yup.string().required(),//XXX
});


const YupVldSchOf_HeaderTextOrNothing : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HeaderTextOrNothing>> = Yup.object({
    simpleText:Yup.string().notRequired(),//XXX
});

    const YupVldSchOf_VideoViewCountRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VideoViewCountRenderer>> = Yup.object({
        viewCount:YupVldSchOf_HeaderText,//XXX
        shortViewCount:YupVldSchOf_HeaderText,//XXX
    });

        const YupVldSchOf_ViewCount : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ViewCount>> = Yup.object({
            videoViewCountRenderer:YupVldSchOf_VideoViewCountRenderer,//XXX
        });

const YupVldSchOf_SignalEnum = Yup.mixed<typeof ytInitialData.SignalEnum [keyof typeof ytInitialData.SignalEnum]>().oneOf(Object.values(ytInitialData.SignalEnum))
    

const YupVldSchOf_ShowEngagementPanelEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ShowEngagementPanelEndpoint>> = Yup.object({
    panelIdentifier:Yup.string().required(),//XXX
});

    const YupVldSchOf_StickyAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyAction>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        showEngagementPanelEndpoint:YupVldSchOf_ShowEngagementPanelEndpoint,//XXX
    });

        const YupVldSchOf_PurpleSignalServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleSignalServiceEndpoint>> = Yup.object({
            signal:YupVldSchOf_SignalEnum,//XXX
            actions:Yup.array().of(YupVldSchOf_StickyAction),//XXX
        });

            
        const YupVldSchOf_FluffyServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyServiceEndpoint>> = Yup.object({
            clickTrackingParams:Yup.string().required(),//XXX
            commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
            getReportFormEndpoint: YupVldSchOf_GetTranscriptEndpointClass.notRequired().default(null).nullable(),//XXX 1
            signalServiceEndpoint: YupVldSchOf_PurpleSignalServiceEndpoint.notRequired().default(null).nullable(),//XXX 2 , 1 XOR 2 ? 
        });

            const YupVldSchOf_Renderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Renderer>> = Yup.object({
                text:YupVldSchOf_Subtitle,//XXX
                icon:YupVldSchOf_Icon,//XXX
                serviceEndpoint: YupVldSchOf_FluffyServiceEndpoint.notRequired().default(null).nullable(),//XXX
                trackingParams:Yup.string().required(),//XXX
                iconPosition:Yup.string().notRequired(),//XXX
            });

                const YupVldSchOf_PurpleItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleItem>> = Yup.object({
                    menuServiceItemRenderer:YupVldSchOf_Renderer,//XXX
                });

                

                




const YupVldSchOf_StyleType = Yup.mixed<typeof ytInitialData.StyleType [keyof typeof ytInitialData.StyleType]>().oneOf(Object.values(ytInitialData.StyleType));
   

    const YupVldSchOf_StyleClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StyleClass>> = Yup.object({
        styleType:YupVldSchOf_StyleType,//XXX
    });




const YupVldSchOf_ButtonRendererStyle = Yup.mixed<typeof ytInitialData.ButtonRendererStyle [keyof typeof ytInitialData.ButtonRendererStyle]>().oneOf(Object.values(ytInitialData.ButtonRendererStyle));

const YupVldSchOf_SizeTypeEnum = Yup.mixed<typeof ytInitialData.SizeTypeEnum [keyof typeof ytInitialData.SizeTypeEnum]>().oneOf(Object.values(ytInitialData.SizeTypeEnum));



const YupVldSchOf_UpdateToggleButtonStateCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.UpdateToggleButtonStateCommand>> = Yup.object({
    toggled:Yup.boolean().required(),//XXX
    buttonId:Yup.string().required(),//XXX
});

const YupVldSchOf_Accessibility : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Accessibility>> = Yup.object({
    label:Yup.string().required(),//XXX
});

    const YupVldSchOf_ButtonRenderer8 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ButtonRenderer8>> = Yup.object({//Add-
        style:YupVldSchOf_ButtonRendererStyle,//XXX 
        size:YupVldSchOf_SizeTypeEnum,//XXX 
        isDisabled:Yup.boolean().required(),//XXX 
        icon:YupVldSchOf_Icon,//XXX 
        accessibility:YupVldSchOf_Accessibility,//XXX 
        trackingParams:Yup.string().required(),//XXX 
    });

    const YupVldSchOf_DisabledAccessibilityData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DisabledAccessibilityData>> = Yup.object({
        accessibilityData:YupVldSchOf_Accessibility,//XXX
    });

        const YupVldSchOf_ShortViewCountText : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ShortViewCountText>> = Yup.object({
            accessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
            simpleText:Yup.string().required(),//XXX
        });


const YupVldSchOf_Status = Yup.mixed<typeof ytInitialData.Status [keyof typeof ytInitialData.Status]>().oneOf(Object.values(ytInitialData.Status));






const YupVldSchOf_ToggleButtonIDData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ToggleButtonIDData>> = Yup.object({
    id:Yup.string().required(),//XXX
});

    const YupVldSchOf_ToggleButtonSupportedData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ToggleButtonSupportedData>> = Yup.object({
        toggleButtonIdData:YupVldSchOf_ToggleButtonIDData,//XXX
    });


        


const YupVldSchOf_WatchEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WatchEndpoint>> = Yup.object({
    videoId:Yup.string().required(),//XXX
});



    const YupVldSchOf_FluffyLikeEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyLikeEndpoint>> = Yup.object({
        status:YupVldSchOf_Status,//XXX
        target:YupVldSchOf_WatchEndpoint,//XXX
        likeParams:Yup.string().required(),//XXX
    });

        const YupVldSchOf_IndigoCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndigoCommand>> = Yup.object({
            clickTrackingParams:Yup.string().required(),//XXX
            updateToggleButtonStateCommand: YupVldSchOf_UpdateToggleButtonStateCommand.notRequired().default(null).nullable(),//XXX
            commandMetadata: YupVldSchOf_AddToWatchLaterCommandCommandMetadata.notRequired().default(null).nullable(),//XXX
            likeEndpoint: YupVldSchOf_FluffyLikeEndpoint.notRequired().default(null).nullable(),//XXX
        });

            const YupVldSchOf_TentacledCommandExecutorCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledCommandExecutorCommand>> = Yup.object({
                commands:Yup.array().of(YupVldSchOf_IndigoCommand),//XXX
            });

                const YupVldSchOf_FluffyDefaultServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyDefaultServiceEndpoint>> = Yup.object({
                    clickTrackingParams:Yup.string().required(),//XXX
                    commandExecutorCommand:YupVldSchOf_TentacledCommandExecutorCommand,//XXX
                });


    const YupVldSchOf_ToggledServiceEndpointLikeEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ToggledServiceEndpointLikeEndpoint>> = Yup.object({
        status:YupVldSchOf_Status,//XXX
        target:YupVldSchOf_WatchEndpoint,//XXX
        removeLikeParams:Yup.string().required(),//XXX
    });

        const YupVldSchOf_ToggledServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ToggledServiceEndpoint>> = Yup.object({
            clickTrackingParams:Yup.string().required(),//XXX
            commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
            likeEndpoint:YupVldSchOf_ToggledServiceEndpointLikeEndpoint,//XXX
        });

        
            const YupVldSchOf_TentacledToggleButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledToggleButtonRenderer>> = Yup.object({
                style:YupVldSchOf_StyleClass,//XXX
                isToggled:Yup.boolean().required(),//XXX
                isDisabled:Yup.boolean().required(),//XXX
                defaultIcon:YupVldSchOf_Icon,//XXX
                defaultText:YupVldSchOf_ShortViewCountText,//XXX
                defaultServiceEndpoint:YupVldSchOf_FluffyDefaultServiceEndpoint,//XXX
                toggledText:YupVldSchOf_ShortViewCountText,//XXX
                toggledServiceEndpoint:YupVldSchOf_ToggledServiceEndpoint,//XXX
                accessibility:YupVldSchOf_Accessibility,//XXX
                trackingParams:Yup.string().required(),//XXX
                defaultTooltip:Yup.string().required(),//XXX
                toggledStyle:YupVldSchOf_StyleClass,//XXX
                accessibilityData:YupVldSchOf_DisabledAccessibilityData,//XXX
                toggleButtonSupportedData:YupVldSchOf_ToggleButtonSupportedData,//XXX
                targetId:Yup.string().required(),//XXX //? "watch-like"
            }).concat(ytInitialData.ToggleButtonRendererToggledTooltip.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"toggledTooltip"));//XXX

        



    const YupVldSchOf_PurpleLikeEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleLikeEndpoint>> = Yup.object({
        status:YupVldSchOf_Status,//XXX
        target:YupVldSchOf_WatchEndpoint,//XXX
        dislikeParams:Yup.string().required(),//XXX
    });

        const YupVldSchOf_StickyCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyCommand>> = Yup.object({
            clickTrackingParams:Yup.string().required(),//XXX
            updateToggleButtonStateCommand: YupVldSchOf_UpdateToggleButtonStateCommand.notRequired().default(null).nullable(),//XXX 1
            commandMetadata: YupVldSchOf_AddToWatchLaterCommandCommandMetadata.notRequired().default(null).nullable(),//XXX 2 // 1 XOR 2 ?
            likeEndpoint: YupVldSchOf_PurpleLikeEndpoint.notRequired().default(null).nullable(),//XXX
        });

            const YupVldSchOf_FluffyCommandExecutorCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyCommandExecutorCommand>> = Yup.object({
                commands:Yup.array().of(YupVldSchOf_StickyCommand),//XXX
            });

                const YupVldSchOf_PurpleDefaultServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleDefaultServiceEndpoint>> = Yup.object({
                    clickTrackingParams:Yup.string().required(),//XXX
                    commandExecutorCommand:YupVldSchOf_FluffyCommandExecutorCommand,//XXX
                });


                    const YupVldSchOf_FluffyToggleButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyToggleButtonRenderer>> = Yup.object({
                        style:YupVldSchOf_StyleClass,//XXX
                        isToggled:Yup.boolean().required(),//XXX
                        isDisabled:Yup.boolean().required(),//XXX
                        defaultIcon:YupVldSchOf_Icon,//XXX
                        defaultServiceEndpoint:YupVldSchOf_PurpleDefaultServiceEndpoint,//XXX
                        toggledServiceEndpoint:YupVldSchOf_ToggledServiceEndpoint,//XXX
                        accessibility:YupVldSchOf_Accessibility,//XXX
                        trackingParams:Yup.string().required(),//XXX
                        defaultTooltip:Yup.string().required(),//XXX
                        toggledTooltip:Yup.string().required(),//XXX
                        toggledStyle:YupVldSchOf_StyleClass,//XXX
                        accessibilityData:YupVldSchOf_DisabledAccessibilityData,//XXX
                        toggleButtonSupportedData:YupVldSchOf_ToggleButtonSupportedData,//XXX
                        targetId:Yup.string().required(),//XXX // ? "watch-dislike"
                    });

                        const YupVldSchOf_DislikeButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DislikeButton>> = Yup.object({
                            toggleButtonRenderer:YupVldSchOf_FluffyToggleButtonRenderer,//XXX
                        });
            
                        const YupVldSchOf_SegmentedLikeDislikeButtonRendererLikeButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SegmentedLikeDislikeButtonRendererLikeButton>> = Yup.object({
                            toggleButtonRenderer:YupVldSchOf_TentacledToggleButtonRenderer,//XXX
                        });
            
                            const YupVldSchOf_SegmentedLikeDislikeButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SegmentedLikeDislikeButtonRenderer>> = Yup.object({
                                likeButton:YupVldSchOf_SegmentedLikeDislikeButtonRendererLikeButton,//XXX
                                dislikeButton:YupVldSchOf_DislikeButton, //XXX
                                likeCount:Yup.string().required(),//XXX
                            });



                   




const YupVldSchOf_PopupType = Yup.mixed<typeof ytInitialData.PopupType [keyof typeof ytInitialData.PopupType]>().oneOf(Object.values(ytInitialData.PopupType));

const YupVldSchOf_UnifiedSharePanelRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.UnifiedSharePanelRenderer>> = Yup.object({
    trackingParams:Yup.string().required(),//XXX
    showLoadingSpinner:Yup.boolean().required(),//XXX
});

    const YupVldSchOf_FluffyPopup : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyPopup>> = Yup.object({
        unifiedSharePanelRenderer:YupVldSchOf_UnifiedSharePanelRenderer,//XXX
    });

        const YupVldSchOf_PurpleOpenPopupAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleOpenPopupAction>> = Yup.object({
            popup:YupVldSchOf_FluffyPopup,//XXX
            popupType:YupVldSchOf_PopupType,//XXX
            beReused:Yup.boolean().required(),
        });

            const YupVldSchOf_ShareEntityServiceEndpointCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ShareEntityServiceEndpointCommand>> = Yup.object({
                clickTrackingParams:Yup.string().required(),//XXX
                openPopupAction:YupVldSchOf_PurpleOpenPopupAction,//XXX
            });

                const YupVldSchOf_ShareEntityServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ShareEntityServiceEndpoint>> = Yup.object({
                    serializedShareEntity:Yup.string().required(),//XXX
                    commands:Yup.array().of(YupVldSchOf_ShareEntityServiceEndpointCommand),//XXX
                });

                    const YupVldSchOf_ServiceEndpointClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ServiceEndpointClass>> = Yup.object({
                        clickTrackingParams:Yup.string().required(),//XXX
                        commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
                        shareEntityServiceEndpoint:YupVldSchOf_ShareEntityServiceEndpoint,//XXX
                    });

                    const YupVldSchOf_StickyButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyButtonRenderer>> = Yup.object({
                        style:YupVldSchOf_ButtonRendererStyle,//XXX
                        size:YupVldSchOf_SizeTypeEnum,//XXX
                        isDisabled:Yup.boolean().required(),//XXX
                        text:YupVldSchOf_Subtitle,//XXX
                        serviceEndpoint:YupVldSchOf_ServiceEndpointClass,//XXX
                        icon:YupVldSchOf_Icon,//XXX
                        tooltip:Yup.string().required(),//XXX
                        trackingParams:Yup.string().required(),//XXX
                        accessibilityData:YupVldSchOf_DisabledAccessibilityData,//XXX
                    });

                    
                        const YupVldSchOf_TopLevelButtonElement : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TopLevelButtonElement>> = Yup.object({
                            segmentedLikeDislikeButtonRenderer: YupVldSchOf_SegmentedLikeDislikeButtonRenderer.notRequired().default(null).nullable(),//XXX
                            buttonRenderer: YupVldSchOf_StickyButtonRenderer.notRequired().default(null).nullable(),  //XXX
                        });


            



const YupVldSchOf_VisibilityEnum = Yup.mixed<typeof ytInitialData.VisibilityEnum [keyof typeof ytInitialData.VisibilityEnum]>().oneOf(Object.values(ytInitialData.VisibilityEnum));
                        
    const YupVldSchOf_ChangeEngagementPanelVisibilityAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ChangeEngagementPanelVisibilityAction>> = Yup.object({
        targetId:Yup.string().required(),//XXX
        visibility:YupVldSchOf_VisibilityEnum,//XXX
    });

        const YupVldSchOf_CommandClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommandClass>> = Yup.object({
            clickTrackingParams:Yup.string().required(),//XXX
            changeEngagementPanelVisibilityAction: YupVldSchOf_ChangeEngagementPanelVisibilityAction.notRequired().default(null).nullable(),//XXX 1
            commandMetadata: YupVldSchOf_AddToWatchLaterCommandCommandMetadata.notRequired().default(null).nullable(),//XXX 2
            addToPlaylistServiceEndpoint: YupVldSchOf_WatchEndpoint.notRequired().default(null).nullable(),//XXX 2 , 1 XOR 2 ?
        });

            const YupVldSchOf_MenuItemMenuServiceItemRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuItemMenuServiceItemRenderer>> = Yup.object({
                text:YupVldSchOf_Subtitle,//XXX
                icon:YupVldSchOf_Icon,//XXX
                serviceEndpoint:YupVldSchOf_CommandClass,//XXX
                trackingParams:Yup.string().required(),//XXX
                isDisabled:Yup.boolean().notRequired(),
            });

                const YupVldSchOf_MenuItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuItem>> = Yup.object({
                    menuServiceItemDownloadRenderer: YupVldSchOf_MenuItemMenuServiceItemDownloadRenderer.notRequired().default(null).nullable(),//XXX 1
                    menuServiceItemRenderer: YupVldSchOf_MenuItemMenuServiceItemRenderer.notRequired().default(null).nullable(),//XXX 2 , 1 XOR 2 ?
                });

      

            
            


const YupVldSchOf_CommandOfflineVideoEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommandOfflineVideoEndpoint>> = Yup.object({
    videoId:Yup.string().required(),//XXX
    onAddCommand:YupVldSchOf_PurpleOnAddCommand,//XXX
    //action:Yup.string().required(),//Del-OOO
});



const YupVldSchOf_TentacledButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledButtonRenderer>> = Yup.object({
    style:YupVldSchOf_ButtonRendererStyle,//XXX
    size:YupVldSchOf_SizeTypeEnum,//XXX
    isDisabled:Yup.boolean().required(),//XXX
    text:YupVldSchOf_Subtitle,//XXX
    icon:YupVldSchOf_Icon,//XXX
    accessibility: YupVldSchOf_Accessibility.notRequired().default(null).nullable(),//XXX
    tooltip:Yup.string().required(),//XXX
    trackingParams:Yup.string().required(),//XXX
    accessibilityData:YupVldSchOf_DisabledAccessibilityData,//XXX
    targetId:Yup.string().notRequired(),
    command:YupVldSchOf_CommandClass.notRequired().default(null).nullable(),//XXX
});

    const YupVldSchOf_DownloadButtonRendererCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DownloadButtonRendererCommand>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        offlineVideoEndpoint:YupVldSchOf_CommandOfflineVideoEndpoint,//XXX
    });

        const YupVldSchOf_DownloadButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DownloadButtonRenderer>> = Yup.object({
            trackingParams:Yup.string().required(),//XXX
            style:YupVldSchOf_ButtonRendererStyle,//XXX
            size:YupVldSchOf_SizeTypeEnum,//XXX
            targetId:Yup.string().required(),//XXX
            command:YupVldSchOf_DownloadButtonRendererCommand,//XXX
        });


            const YupVldSchOf_MenuFlexibleItemRendererTopLevelButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuFlexibleItemRendererTopLevelButton>> = Yup.object({
                downloadButtonRenderer: YupVldSchOf_DownloadButtonRenderer.notRequired().default(null).nullable(),//XXX
                buttonRenderer: YupVldSchOf_TentacledButtonRenderer.notRequired().default(null).nullable(),//XXX
            });

                const YupVldSchOf_MenuFlexibleItemRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuFlexibleItemRenderer>> = Yup.object({
                    menuItem:YupVldSchOf_MenuItem,//XXX
                    topLevelButton:YupVldSchOf_MenuFlexibleItemRendererTopLevelButton,//XXX
                });

                
                    const YupVldSchOf_FlexibleItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FlexibleItem>> = Yup.object({
                        menuFlexibleItemRenderer:YupVldSchOf_MenuFlexibleItemRenderer,//XXX
                    });

                    const YupVldSchOf_VideoActionsMenuRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VideoActionsMenuRenderer>> = Yup.object({
                        items:Yup.array().of(YupVldSchOf_PurpleItem),//XXX
                        trackingParams:Yup.string().required(),//XXX
                        topLevelButtons:Yup.array().of(YupVldSchOf_TopLevelButtonElement),//XXX
                        accessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
                        flexibleItems:Yup.array().of(YupVldSchOf_FlexibleItem),//XXX
                    });

                        const YupVldSchOf_VideoActions : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VideoActions>> = Yup.object({
                            menuRenderer:YupVldSchOf_VideoActionsMenuRenderer,//XXX
                        });

                            const YupVldSchOf_VideoPrimaryInfoRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VideoPrimaryInfoRenderer>> = Yup.object({
                                title:YupVldSchOf_Subtitle,//XXX
                                viewCount:YupVldSchOf_ViewCount,//XXX
                                videoActions:YupVldSchOf_VideoActions,//XXX
                                trackingParams:Yup.string().required(),//XXX
                                dateText:YupVldSchOf_HeaderText,//XXX
                                relativeDateText:YupVldSchOf_ShortViewCountText,//XXX
                            });
                        
              
                            

    





const YupVldSchOf_NavigationEndpointBrowseEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EndpointBrowseEndpoint>> = Yup.object({
    browseId:Yup.string().required(),//XXX
});

    const YupVldSchOf_ChannelNavigationEndpointClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ChannelNavigationEndpointClass>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        commandMetadata:YupVldSchOf_EndpointCommandMetadata,//XXX
        browseEndpoint:YupVldSchOf_NavigationEndpointBrowseEndpoint,//XXX
    });

        const YupVldSchOf_BylineRun : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.BylineRun>> = Yup.object({
            text:Yup.string().required(),//XXX
            navigationEndpoint:YupVldSchOf_ChannelNavigationEndpointClass,//XXX
        });

             
            const YupVldSchOf_Byline : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Byline>> = Yup.object({
                runs:Yup.array().of(YupVldSchOf_BylineRun),//XXX
            });




const YupVldSchOf_OwnerBadgeMetadataBadgeRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OwnerBadgeMetadataBadgeRenderer>> = Yup.object({
    icon:YupVldSchOf_Icon,//XXX
    style:Yup.string().required(),//XXX
    tooltip:Yup.string().required(),//XXX
    trackingParams:Yup.string().required(),//XXX
    accessibilityData:YupVldSchOf_Accessibility,//XXX
});

    const YupVldSchOf_OwnerBadgeElement : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OwnerBadgeElement>> = Yup.object({
        metadataBadgeRenderer:YupVldSchOf_OwnerBadgeMetadataBadgeRenderer,//XXX
    });




const YupVldSchOf_AmbitiousCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AmbitiousCommand>> = Yup.object({
    clickTrackingParams:Yup.string().required(),
    changeEngagementPanelVisibilityAction: YupVldSchOf_ChangeEngagementPanelVisibilityAction.notRequired().default(null).nullable(),
    updateToggleButtonStateCommand: YupVldSchOf_UpdateToggleButtonStateCommand.notRequired().default(null).nullable(),
});

    const YupVldSchOf_IndigoCommandExecutorCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndigoCommandExecutorCommand>> = Yup.object({
        commands:Yup.array().of(YupVldSchOf_AmbitiousCommand),
    });




const YupVldSchOf_CommonConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommonConfig>> = Yup.object({
    url:Yup.string().required(),//XXX
});

    const YupVldSchOf_Html5PlaybackOnesieConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Html5PlaybackOnesieConfig>> = Yup.object({
        commonConfig:YupVldSchOf_CommonConfig,//XXX
    });

        const YupVldSchOf_WatchEndpointSupportedOnesieConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WatchEndpointSupportedOnesieConfig>> = Yup.object({
            html5PlaybackOnesieConfig:YupVldSchOf_Html5PlaybackOnesieConfig,//XXX
        });

            const YupVldSchOf_CurrentVideoEndpointWatchEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CurrentVideoEndpointWatchEndpoint>> = Yup.object({
                videoId:Yup.string().required(),//XXX
                watchEndpointSupportedOnesieConfig:YupVldSchOf_WatchEndpointSupportedOnesieConfig,//XXX
            });
               
                export const YupVldSchOf_CurrentVideoEndpointClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CurrentVideoEndpointClass>> = Yup.object({
                    clickTrackingParams:Yup.string().required(),//XXX
                    commandMetadata:YupVldSchOf_EndpointCommandMetadata,//XXX
                    watchEndpoint:YupVldSchOf_CurrentVideoEndpointWatchEndpoint,//XXX
                });
      
                

        

    //A FAIRE : ajuster concat Source : SQUEEZIE marche pas simpleText
    const YupVldSchOf_Title : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Title>> = Yup.object({
        runs: Yup.array().of(YupVldSchOf_SubtitleRun).notRequired(),//XXX
        simpleText:Yup.string().notRequired(),//XXX
    });//.concat(ytInitialData.TitleSimpleText.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"simpleText",false));//XXX

    const YupVldSchOf_PurpleServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleServiceEndpoint>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
        createCommentReplyEndpoint: YupVldSchOf_CreateCommentReplyEndpoint.notRequired().default(null).nullable(),
        createCommentEndpoint: YupVldSchOf_CreateCommentEndpoint.notRequired().default(null).nullable(),
        unsubscribeEndpoint: YupVldSchOf_SubscribeEndpoint.notRequired().default(null).nullable(),//XXX
    });



       


const YupVldSchOf_TentacledWebCommandMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledWebCommandMetadata>> = Yup.object({
    ignoreNavigation:Yup.boolean().required(),
});

    const YupVldSchOf_PurpleCommandMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleCommandMetadata>> = Yup.object({
        webCommandMetadata:YupVldSchOf_TentacledWebCommandMetadata,
    });




const YupVldSchOf_FluffyButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyButtonRenderer>> = Yup.object({
    text:YupVldSchOf_Subtitle,
    trackingParams:Yup.string().required(),
});

    const YupVldSchOf_CancelButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CancelButton>> = Yup.object({
        buttonRenderer:YupVldSchOf_FluffyButtonRenderer,
    });

                                                                                                                        

        




const YupVldSchOf_PurpleSize = Yup.mixed<typeof ytInitialData.PurpleSize [keyof typeof ytInitialData.PurpleSize]>().oneOf(Object.values(ytInitialData.PurpleSize));

    const YupVldSchOf_EmojiButtonButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EmojiButtonButtonRenderer>> = Yup.object({
        size:YupVldSchOf_PurpleSize,
        icon:YupVldSchOf_Icon,
        trackingParams:Yup.string().required(),
        accessibilityData:YupVldSchOf_DisabledAccessibilityData,
    });

        const YupVldSchOf_EmojiButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EmojiButton>> = Yup.object({
            buttonRenderer:YupVldSchOf_EmojiButtonButtonRenderer,
        });


          
const YupVldSchOf_CategoryID = Yup.mixed<typeof ytInitialData.CategoryID [keyof typeof ytInitialData.CategoryID]>().oneOf(Object.values(ytInitialData.CategoryID));
                                                                                                                                                                                                                                                                    
const YupVldSchOf_CategoryType = Yup.mixed<typeof ytInitialData.CategoryType [keyof typeof ytInitialData.CategoryType]>().oneOf(Object.values(ytInitialData.CategoryType));

    const YupVldSchOf_EmojiPickerCategoryRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EmojiPickerCategoryRenderer>> = Yup.object({
        categoryId:YupVldSchOf_CategoryID,
        title:YupVldSchOf_HeaderText,
        emojiIds:Yup.array().of(Yup.string()).required(),
        trackingParams:Yup.string().required(),
        categoryType:YupVldSchOf_CategoryType,
        imageLoadingLazy:Yup.boolean().notRequired(),
    });

        const YupVldSchOf_Category : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Category>> = Yup.object({
            emojiPickerCategoryRenderer:YupVldSchOf_EmojiPickerCategoryRenderer,
        });

        
                                                                                                                
                                                                                                                                
const YupVldSchOf_TargetID = Yup.mixed<typeof ytInitialData.TargetID [keyof typeof ytInitialData.TargetID]>().oneOf(Object.values(ytInitialData.TargetID));

const YupVldSchOf_ID = Yup.mixed<typeof ytInitialData.ID [keyof typeof ytInitialData.ID]>().oneOf(Object.values(ytInitialData.ID));

    const YupVldSchOf_EmojiPickerCategoryButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EmojiPickerCategoryButtonRenderer>> = Yup.object({
        categoryId:YupVldSchOf_CategoryID,
        icon:YupVldSchOf_Icon,
        accessibility:YupVldSchOf_DisabledAccessibilityData,
        targetId: YupVldSchOf_TargetID.notRequired().default(null).nullable(),
    }).concat(ytInitialData.Tooltip.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"tooltip"));

        const YupVldSchOf_CategoryButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CategoryButton>> = Yup.object({
            emojiPickerCategoryButtonRenderer:YupVldSchOf_EmojiPickerCategoryButtonRenderer,
        });

            
                                                                                                                        
            const YupVldSchOf_EmojiPickerRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EmojiPickerRenderer>> = Yup.object({
                id:YupVldSchOf_ID,
                categories:Yup.array().of(YupVldSchOf_Category),
                categoryButtons:Yup.array().of(YupVldSchOf_CategoryButton),
                searchPlaceholderText:YupVldSchOf_Subtitle,
                searchNoResultsText:YupVldSchOf_Subtitle,
                pickSkinToneText:YupVldSchOf_Subtitle,
                trackingParams:Yup.string().required()
            })
            .concat(ytInitialData.ClearSearchLabel.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"clearSearchLabel"))
            .concat(ytInitialData.SkinToneGenericLabel.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"skinToneGenericLabel"))
            .concat(ytInitialData.SkinToneLightLabel.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"skinToneLightLabel"))
            .concat(ytInitialData.SkinToneMediumLightLabel.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"skinToneMediumLightLabel"))
            .concat(ytInitialData.SkinToneMediumLabel.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"skinToneMediumLabel"))
            .concat(ytInitialData.SkinToneMediumDarkLabel.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"skinToneMediumDarkLabel"))
            .concat(ytInitialData.SkinToneDarkLabel.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"skinToneDarkLabel"))

                const YupVldSchOf_EmojiPicker : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EmojiPicker>> = Yup.object({
                    emojiPickerRenderer:YupVldSchOf_EmojiPickerRenderer,
                });

                    
             


            
const YupVldSchOf_SubscribeCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SubscribeCommand>> = Yup.object({
    clickTrackingParams:Yup.string().required(),//XXX
    commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
    subscribeEndpoint:YupVldSchOf_SubscribeEndpoint,//XXX
});

const YupVldSchOf_MetadataRowContainerRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MetadataRowContainerRenderer>> = Yup.object({
    collapsedItemCount:Yup.number().required(),//XXX
    trackingParams:Yup.string().required(),//XXX
});   

    const YupVldSchOf_MetadataRowContainer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MetadataRowContainer>> = Yup.object({
        metadataRowContainerRenderer:YupVldSchOf_MetadataRowContainerRenderer,//XXX
    });

        const YupVldSchOf_OnUnsubscribeEndpointCommandMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnUnsubscribeEndpointCommandMetadata>> = Yup.object({
            webCommandMetadata:YupVldSchOf_StickyWebCommandMetadata,//XXX
        });


            

const YupVldSchOf_Target = Yup.mixed<typeof ytInitialData.Target [keyof typeof ytInitialData.Target]>().oneOf(Object.values(ytInitialData.Target));

    const YupVldSchOf_InnertubeCommandURLEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.InnertubeCommandURLEndpoint>> = Yup.object({
        url:Yup.string().required(),//XXX
        target:YupVldSchOf_Target,//XXX
        nofollow:Yup.boolean().required(),//XXX
    });

        const YupVldSchOf_InnertubeCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.InnertubeCommand>> = Yup.object({
            clickTrackingParams:Yup.string().required(),//XXX
            commandMetadata:YupVldSchOf_EndpointCommandMetadata,//XXX
            urlEndpoint:YupVldSchOf_InnertubeCommandURLEndpoint,//XXX
        });

            const YupVldSchOf_OnTap : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnTap>> = Yup.object({
                innertubeCommand:YupVldSchOf_InnertubeCommand,//XXX
            });

                const YupVldSchOf_CommandRun : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommandRun>> = Yup.object({
                    startIndex:Yup.number().required(),//XXX
                    length:Yup.number().required(),//XXX
                    onTap:YupVldSchOf_OnTap,//XXX
                    loggingDirectives: YupVldSchOf_CommandRunLoggingDirectives.notRequired().default(null).nullable(),
                });

                    const YupVldSchOf_AttributedDescription : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AttributedDescription>> = Yup.object({
                        content:Yup.string().required(),//XXX
                        commandRuns:Yup.array().of(YupVldSchOf_CommandRun),//XXX
                        styleRuns:Yup.array().of(YupVldSchOf_StyleRun),//XXX
                    });



const YupVldSchOf_LoopCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.LoopCommand>> = Yup.object({
    loop:Yup.boolean().required(),//XXX
});

    const YupVldSchOf_TentacledCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledCommand>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        changeEngagementPanelVisibilityAction: YupVldSchOf_ChangeEngagementPanelVisibilityAction.notRequired().default(null).nullable(),//XXX 1
        hideEngagementPanelScrimAction: YupVldSchOf_HideEngagementPanelScrimAction.notRequired().default(null).nullable(),//XXX 2
        loopCommand: YupVldSchOf_LoopCommand.notRequired().default(null).nullable(),// //XXX 3 , 1 XOR 2 XOR 3 ?
    });

        const YupVldSchOf_PurpleCommandExecutorCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleCommandExecutorCommand>> = Yup.object({
            commands:Yup.array().of(YupVldSchOf_TentacledCommand),//XXX
        });




const YupVldSchOf_CommandURLEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommandURLEndpoint>> = Yup.object({
    url:Yup.string().required(),//XXX
    target:YupVldSchOf_Target,//XXX
});


    const YupVldSchOf_FluffyCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyCommand>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        commandExecutorCommand: YupVldSchOf_PurpleCommandExecutorCommand.notRequired().default(null).nullable(),//XXX 1
        commandMetadata: YupVldSchOf_EndpointCommandMetadata.notRequired().default(null).nullable(),//XXX 2 , 1 XOR 2 ?
        urlEndpoint: YupVldSchOf_CommandURLEndpoint.notRequired().default(null).nullable(),//XXX
    });

        const YupVldSchOf_PurpleButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleButtonRenderer>> = Yup.object({
            style:YupVldSchOf_ButtonRendererStyle,//XXX
            size:YupVldSchOf_SizeTypeEnum,//XXX
            isDisabled:Yup.boolean().required(),//XXX
            text:YupVldSchOf_Title,//XXX // A FAIRE 10/09 CHANGE 
            trackingParams:Yup.string().required(),//XXX
            command: YupVldSchOf_FluffyCommand.notRequired().default(null).nullable(),//XXX
        });

            const YupVldSchOf_PurpleButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleButton>> = Yup.object({
                buttonRenderer:YupVldSchOf_PurpleButtonRenderer,//XXX
            });

                const YupVldSchOf_PurpleConfirmDialogRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleConfirmDialogRenderer>> = Yup.object({
                    title:YupVldSchOf_HeaderText,//XXX
                    trackingParams:Yup.string().required(),//XXX
                    dialogMessages:Yup.array().of(YupVldSchOf_HeaderText),//XXX
                    confirmButton:YupVldSchOf_PurpleButton,//XXX
                    cancelButton:YupVldSchOf_PurpleButton,//XXX
                    primaryIsCancel:Yup.boolean().required(),//XXX
                });

                    const YupVldSchOf_PurplePopup : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurplePopup>> = Yup.object({
                        confirmDialogRenderer:YupVldSchOf_PurpleConfirmDialogRenderer,//XXX
                    });

                        const YupVldSchOf_OnClickCommandOpenPopupAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnClickCommandOpenPopupAction>> = Yup.object({
                            popup:YupVldSchOf_PurplePopup,//XXX
                            popupType:YupVldSchOf_PopupType,//XXX
                        });

                            const YupVldSchOf_OnClickCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnClickCommand>> = Yup.object({
                                clickTrackingParams:Yup.string().required(),//XXX
                                openPopupAction:YupVldSchOf_OnClickCommandOpenPopupAction,//XXX
                            });

                                const YupVldSchOf_ShowEngagementPanelScrimAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ShowEngagementPanelScrimAction>> = Yup.object({
                                    engagementPanelTargetId:Yup.string().required(),//XXX
                                    onClickCommands:Yup.array().of(YupVldSchOf_OnClickCommand),//XXX
                                });

                                    const YupVldSchOf_OnShowCommandElement : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnShowCommandElement>> = Yup.object({
                                        clickTrackingParams:Yup.string().required(),//XXX
                                        changeEngagementPanelVisibilityAction: YupVldSchOf_ChangeEngagementPanelVisibilityAction.notRequired().default(null).nullable(),//XXX 1
                                        scrollToEngagementPanelCommand: YupVldSchOf_ScrollToEngagementPanelCommandClass.notRequired().default(null).nullable(),//XXX 2
                                        showEngagementPanelScrimAction: YupVldSchOf_ShowEngagementPanelScrimAction.notRequired().default(null).nullable(),//XXX 3 ,  1 XOR 2 XOR 3 ?
                                    });

                                      
                                        const YupVldSchOf_ShowMoreCommandCommandExecutorCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ShowMoreCommandCommandExecutorCommand>> = Yup.object({
                                            commands:Yup.array().of(YupVldSchOf_OnShowCommandElement),//XXX
                                        });

                                                    
                                            const YupVldSchOf_ShowMoreCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ShowMoreCommand>> = Yup.object({
                                                clickTrackingParams:Yup.string().required(),//XXX
                                                commandExecutorCommand:YupVldSchOf_ShowMoreCommandCommandExecutorCommand,//XXX
                                            });

                                          
        
            
const YupVldSchOf_AadcGuidelinesStateEntityKey = Yup.mixed<typeof ytInitialData.AadcGuidelinesStateEntityKey [keyof typeof ytInitialData.AadcGuidelinesStateEntityKey]>().oneOf(Object.values(ytInitialData.AadcGuidelinesStateEntityKey));
          

    const YupVldSchOf_HilariousCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HilariousCommand>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        openPopupAction: YupVldSchOf_OnClickCommandOpenPopupAction.notRequired().default(null).nullable(),//XXX
        commandExecutorCommand: YupVldSchOf_IndigoCommandExecutorCommand.notRequired().default(null).nullable(),
        changeEngagementPanelVisibilityAction: YupVldSchOf_ChangeEngagementPanelVisibilityAction.notRequired().default(null).nullable(),
        commandMetadata: YupVldSchOf_AddToWatchLaterCommandCommandMetadata.notRequired().default(null).nullable(),
        getSurveyCommand: YupVldSchOf_GetSurveyCommand.notRequired().default(null).nullable(),
    });

        const YupVldSchOf_VoiceSearchButtonButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VoiceSearchButtonButtonRenderer>> = Yup.object({
            style: YupVldSchOf_ButtonRendererStyle.notRequired().default(null).nullable(),//XXX
            size: YupVldSchOf_SizeTypeEnum.notRequired().default(null).nullable(),//XXX
            isDisabled:Yup.boolean().notRequired(),//XXX
            icon: YupVldSchOf_Icon.notRequired().default(null).nullable(),//XXX 1
            accessibility: YupVldSchOf_Accessibility.notRequired().default(null).nullable(),//XXX 1
            trackingParams:Yup.string().required(),//XXX
            accessibilityData:YupVldSchOf_DisabledAccessibilityData,//XXX
            targetId:Yup.string().notRequired(),//XXX 2
            command: YupVldSchOf_HilariousCommand.notRequired().default(null).nullable(),//XXX 2
            text: YupVldSchOf_HeaderText.notRequired().default(null).nullable(),
            navigationEndpoint: YupVldSchOf_CurrentVideoEndpointClass.notRequired().default(null).nullable(),
            serviceEndpoint:Yup.lazy(self_ref_value => { return YupVldSchOf_IndigoServiceEndpoint.notRequired().default(null).nullable()}),//XXX //TODO TEST 
            tooltip:Yup.string().notRequired(),//XXX
        });

            const YupVldSchOf_VoiceSearchButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VoiceSearchButton>> = Yup.object({
                buttonRenderer:YupVldSchOf_VoiceSearchButtonButtonRenderer,//XXX
            });
            
                const YupVldSchOf_VoiceSearchDialogRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VoiceSearchDialogRenderer>> = Yup.object({
                    placeholderHeader:YupVldSchOf_Subtitle,//XXX
                    promptHeader:YupVldSchOf_Subtitle,//XXX
                    exampleQuery1:YupVldSchOf_Subtitle,//XXX
                    exampleQuery2:YupVldSchOf_Subtitle,//XXX
                    promptMicrophoneLabel:YupVldSchOf_Subtitle,//XXX
                    loadingHeader:YupVldSchOf_Subtitle,//XXX
                    connectionErrorHeader:YupVldSchOf_Subtitle,//XXX
                    connectionErrorMicrophoneLabel:YupVldSchOf_Subtitle,//XXX
                    permissionsHeader:YupVldSchOf_Subtitle,//XXX
                    permissionsSubtext:YupVldSchOf_Subtitle,//XXX
                    disabledHeader:YupVldSchOf_Subtitle,//XXX
                    disabledSubtext:YupVldSchOf_Subtitle,//XXX
                    microphoneButtonAriaLabel:YupVldSchOf_Subtitle,//XXX
                    exitButton:YupVldSchOf_VoiceSearchButton,//XXX
                    trackingParams:Yup.string().required(),//XXX
                    microphoneOffPromptHeader:YupVldSchOf_Subtitle,//XXX
                });

                    const YupVldSchOf_IndigoPopup : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndigoPopup>> = Yup.object({
                        voiceSearchDialogRenderer:YupVldSchOf_VoiceSearchDialogRenderer,//XXX
                    });
                
                        const YupVldSchOf_StickyOpenPopupAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyOpenPopupAction>> = Yup.object({
                            popup:YupVldSchOf_IndigoPopup,//XXX
                            popupType:YupVldSchOf_PopupType,//XXX
                        });
                
                            const YupVldSchOf_IndecentAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndecentAction>> = Yup.object({
                                clickTrackingParams:Yup.string().required(),//XXX
                                openPopupAction:YupVldSchOf_StickyOpenPopupAction,//XXX
                            });
                
                                const YupVldSchOf_FluffySignalServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffySignalServiceEndpoint>> = Yup.object({
                                    signal:YupVldSchOf_SignalEnum,//XXX
                                    actions:Yup.array().of(YupVldSchOf_IndecentAction),//XXX
                                });


                                    const YupVldSchOf_IndigoServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndigoServiceEndpoint>> = Yup.object({
                                        clickTrackingParams:Yup.string().required(),//XXX
                                        commandMetadata:YupVldSchOf_OnUnsubscribeEndpointCommandMetadata,//XXX // A FAIRE : ?.notRequired().default(null).nullable()
                                        signalServiceEndpoint:YupVldSchOf_FluffySignalServiceEndpoint,//XXX
                                    });
            
            
                const YupVldSchOf_State : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.State>> = Yup.object({
                    stateId:Yup.number().required(),//XXX
                    nextStateId:Yup.number().required(),//XXX
                    state:YupVldSchOf_VoiceSearchButton,//XXX
                });

        



    const YupVldSchOf_OnTapCommandClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnTapCommandClass>> = Yup.object({
        clickTrackingParams:Yup.string().required(),
        changeEngagementPanelVisibilityAction:YupVldSchOf_ChangeEngagementPanelVisibilityAction,
    });


const YupVldSchOf_Thumbnail : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Thumbnail>> = Yup.object({
    url:Yup.string().required(),
    width:Yup.number().notRequired(),
    height:Yup.number().notRequired(),
});


    const YupVldSchOf_BackgroundClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.BackgroundClass>> = Yup.object({
        thumbnails:Yup.array().of(YupVldSchOf_Thumbnail),//XXX
    });

        const YupVldSchOf_VideoOwnerRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VideoOwnerRenderer>> = Yup.object({
            thumbnail:YupVldSchOf_BackgroundClass,//XXX
            title:YupVldSchOf_Byline,//XXX
            subscriptionButton:YupVldSchOf_SubscriptionButton,//XXX
            navigationEndpoint:YupVldSchOf_ChannelNavigationEndpointClass,//XXX
            subscriberCountText:YupVldSchOf_ShortViewCountText,//XXX
            trackingParams:Yup.string().required(),//XXX
            badges:Yup.array().of(YupVldSchOf_OwnerBadgeElement),//XXX
        });

            const YupVldSchOf_Owner : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Owner>> = Yup.object({
                videoOwnerRenderer:YupVldSchOf_VideoOwnerRenderer,//XXX
            });


        


    const YupVldSchOf_Avatar : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Avatar>> = Yup.object({
        thumbnails:Yup.array().of(YupVldSchOf_Thumbnail),//XXX
        accessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
    });



        const YupVldSchOf_CommentsEntryPointTeaserRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommentsEntryPointTeaserRenderer>> = Yup.object({
            teaserAvatar:YupVldSchOf_Avatar,//XXX
            teaserContent:YupVldSchOf_HeaderText,//XXX
            trackingParams:Yup.string().required(),//XXX
        });

            const YupVldSchOf_ContentRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ContentRenderer>> = Yup.object({
                commentsEntryPointTeaserRenderer:YupVldSchOf_CommentsEntryPointTeaserRenderer,//XXX
            });

            
                const YupVldSchOf_CommentsEntryPointHeaderRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommentsEntryPointHeaderRenderer>> = Yup.object({
                    headerText:YupVldSchOf_Subtitle,//XXX
                    onTap:YupVldSchOf_ShowMoreCommand,//XXX
                    trackingParams:Yup.string().required(),//XXX
                    commentCount:YupVldSchOf_HeaderText,//XXX
                    contentRenderer:YupVldSchOf_ContentRenderer,//XXX
                    targetId:Yup.string().required(),//XXX
                });





const YupVldSchOf_ContinuationEndpointContinuationCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ContinuationEndpointContinuationCommand>> = Yup.object({
    token:Yup.string().required(),//XXX
    request:Yup.string().required(),//XXX //? "CONTINUATION_REQUEST_TYPE_*"
});

    const YupVldSchOf_PurpleContinuationEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleContinuationEndpoint>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
        continuationCommand:YupVldSchOf_ContinuationEndpointContinuationCommand,//XXX
    });

        const YupVldSchOf_PurpleContinuationItemRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleContinuationItemRenderer>> = Yup.object({
            trigger:Yup.string().required(),//XXX //? "CONTINUATION_TRIGGER_*"
            continuationEndpoint:YupVldSchOf_PurpleContinuationEndpoint,//XXX
        });

            const YupVldSchOf_PurpleContent : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleContent>> = Yup.object({
                commentsEntryPointHeaderRenderer: YupVldSchOf_CommentsEntryPointHeaderRenderer.notRequired().default(null).nullable(),//XXX
                continuationItemRenderer: YupVldSchOf_PurpleContinuationItemRenderer.notRequired().default(null).nullable(),//XXX
            });

                const YupVldSchOf_PurpleItemSectionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleItemSectionRenderer>> = Yup.object({
                    contents:Yup.array().of(YupVldSchOf_PurpleContent),//XXX
                    trackingParams:Yup.string().required(),//XXX
                    sectionIdentifier:Yup.string().required(),//XXX
                    targetId:Yup.string().notRequired(),//XXX
                });

                  
            

        

const YupVldSchOf_Set : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Set>> = Yup.object({
    mode:Yup.string().required(),//XXX
    autoplayVideo:YupVldSchOf_NavigationEndpoint,//XXX
});

    const YupVldSchOf_AutoplayAutoplay : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AutoplayAutoplay>> = Yup.object({
        sets:Yup.array().of(YupVldSchOf_Set),//XXX
        countDownSecs:Yup.number().required(),//XXX
        trackingParams:Yup.string().required(),//XXX
    });

        const YupVldSchOf_TwoColumnWatchNextResultsAutoplay : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TwoColumnWatchNextResultsAutoplay>> = Yup.object({
            autoplay:YupVldSchOf_AutoplayAutoplay,//XXX
        });



const YupVldSchOf_ContinuationCommandCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ContinuationCommandCommand>> = Yup.object({
    clickTrackingParams:Yup.string().required(),//XXX 
    showReloadUiCommand:YupVldSchOf_ScrollToEngagementPanelCommandClass,//XXX 
});


    const YupVldSchOf_ServiceEndpointContinuationCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ServiceEndpointContinuationCommand>> = Yup.object({
        token:Yup.string().required(),//XXX 
        request:Yup.string().required(),//XXX 
        command:YupVldSchOf_ContinuationCommandCommand,//XXX 
    });

        const YupVldSchOf_NavigationEndpoint6 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.NavigationEndpoint6>> = Yup.object({//Add-
            clickTrackingParams:Yup.string().required(),//XXX  
            relatedChipCommand: YupVldSchOf_RelatedChipCommand.notRequired().default(null).nullable(),//XXX 1
            commandMetadata: YupVldSchOf_AddToWatchLaterCommandCommandMetadata.notRequired().default(null).nullable(),//XXX 2
            continuationCommand: YupVldSchOf_ServiceEndpointContinuationCommand.notRequired().default(null).nullable(),//XXX 2 , 1 XOR 2 ?
        });

            const YupVldSchOf_ChipCloudChipRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ChipCloudChipRenderer>> = Yup.object({//Add-
                style:YupVldSchOf_StyleClass,//XXX 
                text:YupVldSchOf_Title,//XXX 
                navigationEndpoint:YupVldSchOf_NavigationEndpoint6,//XXX 
                trackingParams:Yup.string().required(),//XXX 
                isSelected:Yup.boolean().required(),//XXX 
            });

                const YupVldSchOf_Chip : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Chip>> = Yup.object({//Add-
                    chipCloudChipRenderer:YupVldSchOf_ChipCloudChipRenderer,//XXX 
                });

                


    const YupVldSchOf_PreviousButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PreviousButton>> = Yup.object({//Add-
        buttonRenderer:YupVldSchOf_ButtonRenderer8,//XXX 
    });


    const YupVldSchOf_NextButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.NextButton>> = Yup.object({//Add-
        buttonRenderer:YupVldSchOf_ButtonRenderer8,//XXX 
    });    




const YupVldSchOf_NotificationActionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.NotificationActionRenderer>> = Yup.object({
    responseText:YupVldSchOf_HeaderText,
    trackingParams:Yup.string().required(),
});
    const YupVldSchOf_IndecentPopup : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndecentPopup>> = Yup.object({
        notificationActionRenderer:YupVldSchOf_NotificationActionRenderer,
    });
        const YupVldSchOf_IndigoOpenPopupAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndigoOpenPopupAction>> = Yup.object({
            popup:YupVldSchOf_IndecentPopup,
            popupType:YupVldSchOf_PopupType,
        });

        const YupVldSchOf_ChipCloudRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ChipCloudRenderer>> = Yup.object({//Add-
            chips:Yup.array().of(YupVldSchOf_Chip),//XXX 
            trackingParams:Yup.string().required(),//XXX 
            horizontalScrollable:Yup.boolean().required(),//XXX 
            nextButton:YupVldSchOf_NextButton,//XXX 
            previousButton:YupVldSchOf_PreviousButton,//XXX 
        });

            const YupVldSchOf_Content3 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Content3>> = Yup.object({ //Add-
                chipCloudRenderer:YupVldSchOf_ChipCloudRenderer, //XXX 
            });

                const YupVldSchOf_RelatedChipCloudRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.RelatedChipCloudRenderer>> = Yup.object({//Add-
                    content: YupVldSchOf_Content3//XXX
                });

                



const YupVldSchOf_PurpleWatchEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleWatchEndpoint>> = Yup.object({
    videoId:Yup.string().required(),//XXX
    nofollow:Yup.boolean().required(),//XXX
    watchEndpointSupportedOnesieConfig:YupVldSchOf_WatchEndpointSupportedOnesieConfig,//XXX
    params:Yup.string().notRequired(),
    startTimeSeconds:Yup.number().notRequired(),
});

    const YupVldSchOf_CompactVideoRendererNavigationEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CompactVideoRendererNavigationEndpoint>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX 
        commandMetadata:YupVldSchOf_EndpointCommandMetadata,//XXX 
        watchEndpoint: YupVldSchOf_PurpleWatchEndpoint.notRequired().default(null).nullable(),//XXX
        browseEndpoint: YupVldSchOf_NavigationEndpointBrowseEndpoint.notRequired().default(null).nullable(),//XXX 
    });



const YupVldSchOf_UndoFeedbackEndpointAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.UndoFeedbackEndpointAction>> = Yup.object({
    clickTrackingParams:Yup.string().required(),//XXX
    undoFeedbackAction:YupVldSchOf_AdsEngagementPanelContentRenderer,//XXX
});

    const YupVldSchOf_UndoFeedbackEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.UndoFeedbackEndpoint>> = Yup.object({
        undoToken:Yup.string().required(),//XXX
        actions:Yup.array().of(YupVldSchOf_UndoFeedbackEndpointAction),//XXX
    });

    

const YupVldSchOf_Signal : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Signal>> = Yup.object({
    signal:Yup.string().required(),//XXX
});

    const YupVldSchOf_TentacledAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledAction>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        signalAction:YupVldSchOf_Signal,//XXX
    });

                                                            
        const YupVldSchOf_CommandSignalServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommandSignalServiceEndpoint>> = Yup.object({
            signal:YupVldSchOf_SignalEnum,//XXX
            actions:Yup.array().of(YupVldSchOf_TentacledAction),//XXX
        });

            export const YupVldSchOf_OnResponseReceivedEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnResponseReceivedEndpoint>> = Yup.object({
                clickTrackingParams:Yup.string().required(),//XXX
                commandMetadata:YupVldSchOf_OnUnsubscribeEndpointCommandMetadata.notRequired().default(null).nullable(),//XXX
                signalServiceEndpoint:YupVldSchOf_CommandSignalServiceEndpoint,//XXX
            });
        


            const YupVldSchOf_PurpleCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleCommand>> = Yup.object({
                clickTrackingParams:Yup.string().required(),//XXX
                openPopupAction: YupVldSchOf_OnClickCommandOpenPopupAction.notRequired().default(null).nullable(),//XXX
                commandMetadata: YupVldSchOf_AddToWatchLaterCommandCommandMetadata.notRequired().default(null).nullable(),//XXX
                createBackstagePostEndpoint: YupVldSchOf_CreateBackstagePostEndpoint.notRequired().default(null).nullable(),//XXX
                signalServiceEndpoint: YupVldSchOf_CommandSignalServiceEndpoint.notRequired().default(null).nullable(),
            });

                                                            
            const YupVldSchOf_AmbitiousServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AmbitiousServiceEndpoint>> = Yup.object({
                clickTrackingParams:Yup.string().required(),//XXX
                commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
                undoFeedbackEndpoint: YupVldSchOf_UndoFeedbackEndpoint.notRequired().default(null).nullable(),//XXX
                signalServiceEndpoint: YupVldSchOf_CommandSignalServiceEndpoint.notRequired().default(null).nullable(),//XXX
            });



                    const YupVldSchOf_A11YSkipNavigationButtonClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.A11YSkipNavigationButtonClass>> = Yup.object({
                        buttonRenderer:Yup.lazy(self_ref_value => { return YupVldSchOf_A11YSkipNavigationButtonButtonRenderer}),//XXX //TODO TEST 
                    });

                    
                        const YupVldSchOf_CommentReplyDialogRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommentReplyDialogRenderer>> = Yup.object({
                            replyButton:YupVldSchOf_A11YSkipNavigationButtonClass,
                            cancelButton:YupVldSchOf_CancelButton,
                            authorThumbnail:YupVldSchOf_Avatar,
                            placeholderText:YupVldSchOf_Subtitle,
                            errorMessage:YupVldSchOf_Subtitle,
                            emojiButton:YupVldSchOf_EmojiButton,
                            emojiPicker:YupVldSchOf_EmojiPicker,
                            aadcGuidelinesStateEntityKey:YupVldSchOf_AadcGuidelinesStateEntityKey,
                        });

                            const YupVldSchOf_Dialog : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Dialog>> = Yup.object({
                                commentReplyDialogRenderer:YupVldSchOf_CommentReplyDialogRenderer,
                            });
                
                                const YupVldSchOf_CreateCommentReplyDialogEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CreateCommentReplyDialogEndpoint>> = Yup.object({
                                    dialog:YupVldSchOf_Dialog,
                                });

                                    const YupVldSchOf_ButtonRendererNavigationEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ButtonRendererNavigationEndpoint>> = Yup.object({
                                        clickTrackingParams:Yup.string().required(),
                                        commandMetadata:YupVldSchOf_PurpleCommandMetadata,
                                        createCommentReplyDialogEndpoint:YupVldSchOf_CreateCommentReplyDialogEndpoint,
                                    });

                                        const YupVldSchOf_A11YSkipNavigationButtonButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.A11YSkipNavigationButtonButtonRenderer>> = Yup.object({
                                            style:YupVldSchOf_ButtonRendererStyle,//XXX
                                            size:YupVldSchOf_SizeTypeEnum,//XXX
                                            isDisabled:Yup.boolean().notRequired(),//XXX
                                            text: YupVldSchOf_Subtitle.notRequired().default(null).nullable(),//XXX
                                            serviceEndpoint: YupVldSchOf_PurpleServiceEndpoint.notRequired().default(null).nullable(),//XXX
                                            accessibility: YupVldSchOf_Accessibility.notRequired().default(null).nullable(),//XXX
                                            trackingParams:Yup.string().required(),//XXX
                                            navigationEndpoint: YupVldSchOf_ButtonRendererNavigationEndpoint.notRequired().default(null).nullable(),
                                            accessibilityData: YupVldSchOf_DisabledAccessibilityData.notRequired().default(null).nullable(),
                                            command: YupVldSchOf_PurpleCommand.notRequired().default(null).nullable(),
                                            icon: YupVldSchOf_Icon.notRequired().default(null).nullable(),
                                        });
        


                                    

                        const YupVldSchOf_FluffyConfirmDialogRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyConfirmDialogRenderer>> = Yup.object({
                            trackingParams:Yup.string().required(),//XXX
                            dialogMessages:Yup.array().of(YupVldSchOf_Subtitle),//XXX
                            confirmButton:YupVldSchOf_A11YSkipNavigationButtonClass,//XXX
                            cancelButton:YupVldSchOf_A11YSkipNavigationButtonClass,//XXX
                            primaryIsCancel:Yup.boolean().required(),//XXX
                        });

                            const YupVldSchOf_StickyPopup : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyPopup>> = Yup.object({
                                confirmDialogRenderer:YupVldSchOf_FluffyConfirmDialogRenderer,//XXX
                            });

                                const YupVldSchOf_TentacledOpenPopupAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledOpenPopupAction>> = Yup.object({
                                    popup:YupVldSchOf_StickyPopup,//XXX
                                    popupType:YupVldSchOf_PopupType,//XXX
                                });

                                    const YupVldSchOf_IndigoAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndigoAction>> = Yup.object({
                                        clickTrackingParams:Yup.string().required(),//XXX
                                        openPopupAction:YupVldSchOf_TentacledOpenPopupAction,//XXX
                                    });

                                        const YupVldSchOf_OnUnsubscribeEndpointSignalServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnUnsubscribeEndpointSignalServiceEndpoint>> = Yup.object({
                                            signal:YupVldSchOf_SignalEnum,//XXX
                                            actions:Yup.array().of(YupVldSchOf_IndigoAction),//XXX
                                        });

                                            const YupVldSchOf_OnUnsubscribeEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnUnsubscribeEndpoint>> = Yup.object({
                                                clickTrackingParams:Yup.string().required(),//XXX
                                                commandMetadata:YupVldSchOf_OnUnsubscribeEndpointCommandMetadata.notRequired().default(null).nullable(),//XXX
                                                signalServiceEndpoint:YupVldSchOf_OnUnsubscribeEndpointSignalServiceEndpoint,//XXX
                                            });

                                            const YupVldSchOf_StickyServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyServiceEndpoint>> = Yup.object({
                                                clickTrackingParams:Yup.string().required(),//XXX
                                                commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
                                                modifyChannelNotificationPreferenceEndpoint: YupVldSchOf_GetTranscriptEndpointClass.notRequired().default(null).nullable(),//XXX 1
                                                signalServiceEndpoint: YupVldSchOf_OnUnsubscribeEndpointSignalServiceEndpoint.notRequired().default(null).nullable(),//XXX 2 , 1 XOR 2 ?
                                            });

        
                                                const YupVldSchOf_PurpleMenuServiceItemRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleMenuServiceItemRenderer>> = Yup.object({
                                                    text:YupVldSchOf_Title,//XXX
                                                    icon:YupVldSchOf_Icon,//XXX
                                                    serviceEndpoint:YupVldSchOf_StickyServiceEndpoint,//XXX
                                                    trackingParams:Yup.string().required(),//XXX
                                                    isSelected:Yup.boolean().notRequired(),//XXX
                                                });

                                                    const YupVldSchOf_MenuPopupRendererItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuPopupRendererItem>> = Yup.object({
                                                        menuServiceItemRenderer:YupVldSchOf_PurpleMenuServiceItemRenderer,//XXX
                                                    });

                                                        const YupVldSchOf_MenuPopupRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuPopupRenderer>> = Yup.object({
                                                            items:Yup.array().of(YupVldSchOf_MenuPopupRendererItem),//XXX
                                                        });

                                                            const YupVldSchOf_TentacledPopup : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledPopup>> = Yup.object({
                                                                menuPopupRenderer:YupVldSchOf_MenuPopupRenderer,//XXX
                                                            });

                                                                const YupVldSchOf_FluffyOpenPopupAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyOpenPopupAction>> = Yup.object({
                                                                    popup:YupVldSchOf_TentacledPopup,//XXX
                                                                    popupType:YupVldSchOf_PopupType,//XXX
                                                                });

                                                                    const YupVldSchOf_IndecentCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndecentCommand>> = Yup.object({
                                                                        clickTrackingParams:Yup.string().required(),//XXX
                                                                        openPopupAction:YupVldSchOf_FluffyOpenPopupAction,//XXX
                                                                    });

                                                                        const YupVldSchOf_StickyCommandExecutorCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyCommandExecutorCommand>> = Yup.object({
                                                                            commands:Yup.array().of(YupVldSchOf_IndecentCommand),//XXX
                                                                        });

                                                                            const YupVldSchOf_SubscriptionNotificationToggleButtonRendererCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SubscriptionNotificationToggleButtonRendererCommand>> = Yup.object({
                                                                                clickTrackingParams:Yup.string().required(),//XXX
                                                                                commandExecutorCommand:YupVldSchOf_StickyCommandExecutorCommand,//XXX
                                                                            });

                                                                            
                                                                                const YupVldSchOf_SubscriptionNotificationToggleButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SubscriptionNotificationToggleButtonRenderer>> = Yup.object({
                                                                                    states:Yup.array().of(YupVldSchOf_State),//XXX
                                                                                    currentStateId:Yup.number().required(),//XXX
                                                                                    trackingParams:Yup.string().required(),//XXX
                                                                                    command:YupVldSchOf_SubscriptionNotificationToggleButtonRendererCommand,//XXX
                                                                                    targetId:Yup.string().required(),//XXX
                                                                                    secondaryIcon:YupVldSchOf_Icon,//XXX
                                                                                });

                                                                                    const YupVldSchOf_NotificationPreferenceButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.NotificationPreferenceButton>> = Yup.object({
                                                                                        subscriptionNotificationToggleButtonRenderer:YupVldSchOf_SubscriptionNotificationToggleButtonRenderer,//XXX
                                                                                    });  

                                                                                        const YupVldSchOf_SubscribeButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SubscribeButtonRenderer>> = Yup.object({
                                                                                            buttonText:YupVldSchOf_Subtitle,//XXX
                                                                                            subscribed:Yup.boolean().required(),//XXX
                                                                                            enabled:Yup.boolean().required(),//XXX
                                                                                            type:Yup.string().required(),//XXX
                                                                                            channelId:Yup.string().required(),//XXX
                                                                                            showPreferences:Yup.boolean().required(),//XXX
                                                                                            subscribedButtonText:YupVldSchOf_Subtitle,//XXX
                                                                                            unsubscribedButtonText:YupVldSchOf_Subtitle,//XXX
                                                                                            trackingParams:Yup.string().required(),//XXX
                                                                                            unsubscribeButtonText:YupVldSchOf_Subtitle,//XXX
                                                                                            subscribeAccessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
                                                                                            unsubscribeAccessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
                                                                                            notificationPreferenceButton:YupVldSchOf_NotificationPreferenceButton.notRequired().default(null).nullable(),//XXX XX-Add : Notrequired
                                                                                            targetId:Yup.string().notRequired(),//XXX XXX-Add : Notrequired
                                                                                            subscribedEntityKey:Yup.string().notRequired(),//XXX
                                                                                            onSubscribeEndpoints:Yup.array().of(YupVldSchOf_SubscribeCommand),//XXX
                                                                                            onUnsubscribeEndpoints:Yup.array().of(YupVldSchOf_OnUnsubscribeEndpoint),//XXX
                                                                                        });

                                                                                            const YupVldSchOf_SubscribeButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SubscribeButton>> = Yup.object({
                                                                                                subscribeButtonRenderer:YupVldSchOf_SubscribeButtonRenderer,//XXX
                                                                                            });

                                                                                                const YupVldSchOf_VideoSecondaryInfoRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VideoSecondaryInfoRenderer>> = Yup.object({
                                                                                                    owner:YupVldSchOf_Owner,//XXX
                                                                                                    subscribeButton:YupVldSchOf_SubscribeButton,//XXX
                                                                                                    metadataRowContainer:YupVldSchOf_MetadataRowContainer,//XXX
                                                                                                    showMoreText:YupVldSchOf_HeaderText,//XXX
                                                                                                    showLessText:YupVldSchOf_HeaderText,//XXX
                                                                                                    trackingParams:Yup.string().required(),//XXX
                                                                                                    defaultExpanded:Yup.boolean().required(),//XXX
                                                                                                    descriptionCollapsedLines:Yup.number().required(),//XXX
                                                                                                    showMoreCommand:YupVldSchOf_ShowMoreCommand,//XXX
                                                                                                    showLessCommand:YupVldSchOf_OnTapCommandClass,//XXX
                                                                                                    attributedDescription:YupVldSchOf_AttributedDescription,//XXX
                                                                                                });

                                                                                                    const YupVldSchOf_ResultsContent : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ResultsContent>> = Yup.object({
                                                                                                        videoPrimaryInfoRenderer: YupVldSchOf_VideoPrimaryInfoRenderer.notRequired().default(null).nullable(),//XXX
                                                                                                        videoSecondaryInfoRenderer: YupVldSchOf_VideoSecondaryInfoRenderer.notRequired().default(null).nullable(),
                                                                                                        itemSectionRenderer: YupVldSchOf_PurpleItemSectionRenderer.notRequired().default(null).nullable(),//XXX
                                                                                                    });
                                                                                            
                                                                                                        const YupVldSchOf_ResultsResults : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ResultsResults>> = Yup.object({
                                                                                                            contents:Yup.array().of(YupVldSchOf_ResultsContent),//XXX
                                                                                                            trackingParams:Yup.string().required(),//XXX
                                                                                                        });
                                                                                
                                                                                                        
                                                                                                            const YupVldSchOf_TwoColumnWatchNextResultsResults : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TwoColumnWatchNextResultsResults>> = Yup.object({
                                                                                                                results:YupVldSchOf_ResultsResults,//XXX
                                                                                                            });
                                                                            
                                                                                                     

                                                                       
                                                                    


const YupVldSchOf_CunningCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CunningCommand>> = Yup.object({
    clickTrackingParams:Yup.string().required(),
    commandMetadata:YupVldSchOf_EndpointCommandMetadata,
    urlEndpoint:YupVldSchOf_CommandURLEndpoint,
});

    const YupVldSchOf_ButtonButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ButtonButtonRenderer>> = Yup.object({
        style:YupVldSchOf_ButtonRendererStyle,//XXX
        text:YupVldSchOf_Title,//XXX
        serviceEndpoint: YupVldSchOf_AmbitiousServiceEndpoint.notRequired().default(null).nullable(),//XXX
        trackingParams:Yup.string().required(),//XXX
        command: YupVldSchOf_CunningCommand.notRequired().default(null).nullable(),//XXX
    });

        const YupVldSchOf_Button : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Button>> = Yup.object({
            buttonRenderer:YupVldSchOf_ButtonButtonRenderer,//XXX
        });

            
   


       
    const YupVldSchOf_ResponseText : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ResponseText>> = Yup.object({
        runs: Yup.array().of(YupVldSchOf_SubtitleRun).notRequired(),//XXX
        accessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
    }).concat(ytInitialData.ResponseTextSimpleText.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"simpleText",false));//XXX



const YupVldSchOf_DismissalViewStyle = Yup.mixed<typeof ytInitialData.DismissalViewStyle [keyof typeof ytInitialData.DismissalViewStyle]>().oneOf(Object.values(ytInitialData.DismissalViewStyle));

    const YupVldSchOf_NotificationMultiActionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.NotificationMultiActionRenderer>> = Yup.object({
        responseText:YupVldSchOf_ResponseText,//XXX
        buttons:Yup.array().of(YupVldSchOf_Button),//XXX
        trackingParams:Yup.string().required(),//XXX
        dismissalViewStyle:YupVldSchOf_DismissalViewStyle,//XXX
    });
        const YupVldSchOf_ReplaceEnclosingActionItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ReplaceEnclosingActionItem>> = Yup.object({
            notificationMultiActionRenderer:YupVldSchOf_NotificationMultiActionRenderer,//XXX
        });

            const YupVldSchOf_ReplaceEnclosingAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ReplaceEnclosingAction>> = Yup.object({
                item:YupVldSchOf_ReplaceEnclosingActionItem,//XXX
            });
            
                const YupVldSchOf_FeedbackEndpointAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FeedbackEndpointAction>> = Yup.object({
                    clickTrackingParams:Yup.string().required(),//XXX
                    replaceEnclosingAction:YupVldSchOf_ReplaceEnclosingAction,//XXX
                });

                
                    const YupVldSchOf_FeedbackEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FeedbackEndpoint>> = Yup.object({
                        feedbackToken:Yup.string().required(),//XXX
                        uiActions:YupVldSchOf_UIActions,//XXX
                        actions:Yup.array().of(YupVldSchOf_FeedbackEndpointAction),//XXX
                    });



const YupVldSchOf_ThumbnailOverlayTimeStatusRendererStyle = Yup.mixed<typeof ytInitialData.ThumbnailOverlayTimeStatusRendererStyle [keyof typeof ytInitialData.ThumbnailOverlayTimeStatusRendererStyle]>().oneOf(Object.values(ytInitialData.ThumbnailOverlayTimeStatusRendererStyle));

    const YupVldSchOf_ThumbnailOverlayTimeStatusRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailOverlayTimeStatusRenderer>> = Yup.object({
        text:YupVldSchOf_ShortViewCountText,//XXX
        style:YupVldSchOf_ThumbnailOverlayTimeStatusRendererStyle,//XXX
    });



const YupVldSchOf_PlaylistID = Yup.mixed<typeof ytInitialData.PlaylistID [keyof typeof ytInitialData.PlaylistID]>().oneOf(Object.values(ytInitialData.PlaylistID));


const YupVldSchOf_MagentaAction = Yup.mixed<typeof ytInitialData.MagentaAction [keyof typeof ytInitialData.MagentaAction]>().oneOf(Object.values(ytInitialData.MagentaAction));
                          
    const YupVldSchOf_PurpleAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleAction>> = Yup.object({
        addedVideoId:Yup.string().required(),//XXX
        action:YupVldSchOf_MagentaAction,//XXX
    });

        const YupVldSchOf_AddToWatchLaterCommandPlaylistEditEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AddToWatchLaterCommandPlaylistEditEndpoint>> = Yup.object({
            playlistId:YupVldSchOf_PlaylistID,//XXX
            actions:Yup.array().of(YupVldSchOf_PurpleAction),//XXX
        });

        


const YupVldSchOf_ListType = Yup.mixed<typeof ytInitialData.ListType [keyof typeof ytInitialData.ListType]>().oneOf(Object.values(ytInitialData.ListType));


const YupVldSchOf_Params = Yup.mixed<typeof ytInitialData.Params [keyof typeof ytInitialData.Params]>().oneOf(Object.values(ytInitialData.Params));

    const YupVldSchOf_CreatePlaylistServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CreatePlaylistServiceEndpoint>> = Yup.object({
        videoIds:Yup.array().of(Yup.string()).required(),//XXX
        params:YupVldSchOf_Params,//XXX
    });

    
        const YupVldSchOf_OnCreateListCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnCreateListCommand>> = Yup.object({
            clickTrackingParams:Yup.string().required(),//XXX
            commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
            createPlaylistServiceEndpoint:YupVldSchOf_CreatePlaylistServiceEndpoint,//XXX
        });

            const YupVldSchOf_AddToPlaylistCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AddToPlaylistCommand>> = Yup.object({
                openMiniplayer:Yup.boolean().required(),//XXX
                openListPanel:Yup.boolean().required(),//XXX
                videoId:Yup.string().required(),//XXX
                listType:YupVldSchOf_ListType,//XXX
                onCreateListCommand:YupVldSchOf_OnCreateListCommand,//XXX
                videoIds:Yup.array().of(Yup.string()).required(),//XXX
            });

            const YupVldSchOf_HilariousAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HilariousAction>> = Yup.object({
                clickTrackingParams:Yup.string().required(),
                addToPlaylistCommand: YupVldSchOf_AddToPlaylistCommand.notRequired().default(null).nullable(),
                openPopupAction: YupVldSchOf_IndigoOpenPopupAction.notRequired().default(null).nullable(),
            });     
                const YupVldSchOf_TentacledSignalServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledSignalServiceEndpoint>> = Yup.object({
                    signal:YupVldSchOf_SignalEnum,
                    actions:Yup.array().of(YupVldSchOf_HilariousAction),
                });

                    const YupVldSchOf_HilariousServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HilariousServiceEndpoint>> = Yup.object({
                        clickTrackingParams:Yup.string().required(),//XXX
                        commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
                        signalServiceEndpoint: YupVldSchOf_TentacledSignalServiceEndpoint.notRequired().default(null).nullable(),//XXX
                        playlistEditEndpoint: YupVldSchOf_AddToWatchLaterCommandPlaylistEditEndpoint.notRequired().default(null).nullable(),
                        addToPlaylistServiceEndpoint: YupVldSchOf_WatchEndpoint.notRequired().default(null).nullable(),
                        shareEntityServiceEndpoint: YupVldSchOf_ShareEntityServiceEndpoint.notRequired().default(null).nullable(),
                        feedbackEndpoint: YupVldSchOf_FeedbackEndpoint.notRequired().default(null).nullable(),//XXX
                        getReportFormEndpoint: YupVldSchOf_GetTranscriptEndpointClass.notRequired().default(null).nullable(),//XXX
                    });

                        const YupVldSchOf_FluffyMenuServiceItemRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyMenuServiceItemRenderer>> = Yup.object({
                            text:YupVldSchOf_Subtitle,//XXX
                            icon:YupVldSchOf_Icon,//XXX
                            serviceEndpoint:YupVldSchOf_HilariousServiceEndpoint,//XXX
                            trackingParams:Yup.string().required(),//XXX
                            hasSeparator:Yup.boolean().notRequired(),
                        });

                            const YupVldSchOf_FluffyItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyItem>> = Yup.object({
                                menuServiceItemRenderer: YupVldSchOf_FluffyMenuServiceItemRenderer.notRequired().default(null).nullable(),//XXX 1
                                menuServiceItemDownloadRenderer: YupVldSchOf_ItemMenuServiceItemDownloadRenderer.notRequired().default(null).nullable(),//XXX 2 , 1 XOR 2 ?
                            });

                                
                                const YupVldSchOf_PurpleMenuRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleMenuRenderer>> = Yup.object({
                                    items:Yup.array().of(YupVldSchOf_FluffyItem),//XXX
                                    trackingParams:Yup.string().required(),//XXX
                                    accessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
                                    targetId:Yup.string().notRequired(),//XXX
                                });

                                    const YupVldSchOf_CompactVideoRendererMenu : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CompactVideoRendererMenu>> = Yup.object({
                                        menuRenderer:YupVldSchOf_PurpleMenuRenderer,//XXX
                                    });
                                

                const YupVldSchOf_AmbitiousAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AmbitiousAction>> = Yup.object({
                    clickTrackingParams:Yup.string().required(),//XXX
                    addToPlaylistCommand:YupVldSchOf_AddToPlaylistCommand,//XXX
                });
                

                    const YupVldSchOf_UntoggledServiceEndpointSignalServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.UntoggledServiceEndpointSignalServiceEndpoint>> = Yup.object({
                        signal:YupVldSchOf_SignalEnum,//XXX
                        actions:Yup.array().of(YupVldSchOf_AmbitiousAction),//XXX
                    });

                        const YupVldSchOf_UntoggledServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.UntoggledServiceEndpoint>> = Yup.object({
                            clickTrackingParams:Yup.string().required(),//XXX
                            commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
                            playlistEditEndpoint: YupVldSchOf_AddToWatchLaterCommandPlaylistEditEndpoint.notRequired().default(null).nullable(),//XXX
                            signalServiceEndpoint: YupVldSchOf_UntoggledServiceEndpointSignalServiceEndpoint.notRequired().default(null).nullable(),
                        });

                        
            
                     
                                
const YupVldSchOf_FriskyAction = Yup.mixed<typeof ytInitialData.FriskyAction [keyof typeof ytInitialData.FriskyAction]>().oneOf(Object.values(ytInitialData.FriskyAction));
                                                               
    const YupVldSchOf_FluffyAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyAction>> = Yup.object({
        action:YupVldSchOf_FriskyAction,//XXX
        removedVideoId:Yup.string().required(),//XXX
    });

        const YupVldSchOf_RemoveFromWatchLaterCommandPlaylistEditEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.RemoveFromWatchLaterCommandPlaylistEditEndpoint>> = Yup.object({
            playlistId:YupVldSchOf_PlaylistID,//XXX
            actions:Yup.array().of(YupVldSchOf_FluffyAction),//XXX
        });

            const YupVldSchOf_RemoveFromWatchLaterCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.RemoveFromWatchLaterCommand>> = Yup.object({
                clickTrackingParams:Yup.string().required(),//XXX
                commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
                playlistEditEndpoint:YupVldSchOf_RemoveFromWatchLaterCommandPlaylistEditEndpoint,//XXX
            });

            
            
                const YupVldSchOf_ThumbnailOverlayToggleButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailOverlayToggleButtonRenderer>> = Yup.object({
                    isToggled:Yup.boolean().notRequired(),//XXX
                    untoggledIcon:YupVldSchOf_Icon,//XXX
                    toggledIcon:YupVldSchOf_Icon,//XXX
                    untoggledServiceEndpoint:YupVldSchOf_UntoggledServiceEndpoint,//XXX
                    toggledServiceEndpoint: YupVldSchOf_RemoveFromWatchLaterCommand.notRequired().default(null).nullable(),//XXX
                    untoggledAccessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
                    toggledAccessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
                    trackingParams:Yup.string().required(),//XXX
                }).concat(ytInitialData.ThumbnailOverlayToggleButtonRendererToggledTooltip.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"toggledTooltip"))//XXX
                .concat(ytInitialData.UntoggledTooltip.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"untoggledTooltip"));//XXX
                
                

            


const YupVldSchOf_ThumbnailOverlayNowPlayingRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailOverlayNowPlayingRenderer>> = Yup.object({
    text:YupVldSchOf_Subtitle,//XXX
});

    const YupVldSchOf_CompactVideoRendererThumbnailOverlay : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CompactVideoRendererThumbnailOverlay>> = Yup.object({
        thumbnailOverlayTimeStatusRenderer: YupVldSchOf_ThumbnailOverlayTimeStatusRenderer.notRequired().default(null).nullable(),//XXX
        thumbnailOverlayToggleButtonRenderer: YupVldSchOf_ThumbnailOverlayToggleButtonRenderer.notRequired().default(null).nullable(),//XXX
        thumbnailOverlayResumePlaybackRenderer: YupVldSchOf_ThumbnailOverlayResumePlaybackRenderer.notRequired().default(null).nullable(),//XXX
        thumbnailOverlayNowPlayingRenderer: YupVldSchOf_ThumbnailOverlayNowPlayingRenderer.notRequired().default(null).nullable(),//XXX
    });

const YupVldSchOf_MovingThumbnailDetails : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MovingThumbnailDetails>> = Yup.object({
    thumbnails:Yup.array().of(YupVldSchOf_Thumbnail),//XXX
    logAsMovingThumbnail:Yup.boolean().required(),//XXX
});

    const YupVldSchOf_MovingThumbnailRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MovingThumbnailRenderer>> = Yup.object({
        movingThumbnailDetails: YupVldSchOf_MovingThumbnailDetails.notRequired().default(null).nullable(),//XXX
        enableHoveredLogging:Yup.boolean().required(),//XXX
        enableOverlay:Yup.boolean().required(),//XXX
    });

        const YupVldSchOf_RichThumbnail : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.RichThumbnail>> = Yup.object({
            movingThumbnailRenderer:YupVldSchOf_MovingThumbnailRenderer,//XXX
        });

        const YupVldSchOf_CompactVideoRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CompactVideoRenderer>> = Yup.object({
            videoId:Yup.string().required(),//XXX 
            thumbnail:YupVldSchOf_BackgroundClass,//XXX 
            title:YupVldSchOf_ShortViewCountText,//XXX 
            longBylineText:YupVldSchOf_Byline,//XXX 
            publishedTimeText:YupVldSchOf_HeaderText,//XXX 
            viewCountText:YupVldSchOf_HeaderText,//XXX 
            lengthText:YupVldSchOf_ShortViewCountText,//XXX 
            navigationEndpoint:YupVldSchOf_CompactVideoRendererNavigationEndpoint,//XXX 
            shortBylineText:YupVldSchOf_Byline,//XXX 
            badges: Yup.array().of(YupVldSchOf_PurpleBadge).notRequired(),//XXX
            channelThumbnail:YupVldSchOf_BackgroundClass,//XXX
            ownerBadges: Yup.array().of(YupVldSchOf_OwnerBadgeElement).notRequired(),//XXX
            trackingParams:Yup.string().required(),//XXX
            shortViewCountText:YupVldSchOf_ShortViewCountText,//XXX
            menu:YupVldSchOf_CompactVideoRendererMenu,//XXX
            thumbnailOverlays:Yup.array().of(YupVldSchOf_CompactVideoRendererThumbnailOverlay),//XXX
            accessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
            richThumbnail: YupVldSchOf_RichThumbnail.notRequired().default(null).nullable(),//XXX
        });



const YupVldSchOf_SampledThumbnailColor : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SampledThumbnailColor>> = Yup.object({
    red:Yup.number().required(),
    green:Yup.number().required(),
    blue:Yup.number().required(),
});

    const YupVldSchOf_Thumbnail8 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Thumbnail8>> = Yup.object({
        thumbnails: Yup.array().of(YupVldSchOf_Thumbnail),
        sampledThumbnailColor: YupVldSchOf_SampledThumbnailColor,
    });


const YupVldSchOf_DefaultServiceEndpointCommandMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DefaultServiceEndpointCommandMetadata>> = Yup.object({
    webCommandMetadata:YupVldSchOf_PurpleWebCommandMetadata,
});

        

const YupVldSchOf_MenuPopupAccessibility : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuPopupAccessibility>> = Yup.object({
    label:Yup.string().required(),
});

const YupVldSchOf_GetReportFormEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.GetReportFormEndpoint>> = Yup.object({
    params:Yup.string().required(),
});

const YupVldSchOf_VoteCount : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VoteCount>> = Yup.object({
    accessibility:YupVldSchOf_Accessibility,
    simpleText:Yup.string().required(),
});

                                    
    const YupVldSchOf_UpdateCommentVoteAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.UpdateCommentVoteAction>> = Yup.object({
        voteCount:YupVldSchOf_VoteCount,
        voteStatus:Yup.string().required(),
    });

        const YupVldSchOf_ClientAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ClientAction>> = Yup.object({
            clickTrackingParams:Yup.string().required(),
            updateCommentVoteAction:YupVldSchOf_UpdateCommentVoteAction,
        });
                                     
                                        
            const YupVldSchOf_PerformCommentActionEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PerformCommentActionEndpoint>> = Yup.object({
                action:Yup.string().required(),
                clientActions:Yup.array().of(YupVldSchOf_ClientAction),
            });

                const YupVldSchOf_MenuServiceItemRendererServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuServiceItemRendererServiceEndpoint>> = Yup.object({
                    clickTrackingParams:Yup.string().required(),
                    commandMetadata:YupVldSchOf_DefaultServiceEndpointCommandMetadata,
                    getReportFormEndpoint:YupVldSchOf_GetReportFormEndpoint,
                });

                
                    const YupVldSchOf_MenuServiceItemRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuServiceItemRenderer>> = Yup.object({
                        text:YupVldSchOf_Subtitle,
                        icon:YupVldSchOf_Icon,
                        serviceEndpoint:YupVldSchOf_MenuServiceItemRendererServiceEndpoint,
                        trackingParams:Yup.string().required(),
                    });

                                                                
                        const YupVldSchOf_Item : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Item>> = Yup.object({
                            menuServiceItemRenderer:YupVldSchOf_MenuServiceItemRenderer,
                        });

                            const YupVldSchOf_MenuRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuRenderer>> = Yup.object({
                                items:Yup.array().of(YupVldSchOf_Item),
                                trackingParams:Yup.string().required(),
                                accessibility:YupVldSchOf_Accessibility,
                                menuPopupAccessibility: YupVldSchOf_MenuPopupAccessibility.notRequired().default(null).nullable(),
                            });

                                const YupVldSchOf_Menu : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Menu>> = Yup.object({
                                    menuRenderer: YupVldSchOf_MenuRenderer,
                                });

                                
      
        



const YupVldSchOf_ThumbnailOverlayNowPlayingRenderer2 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailOverlayNowPlayingRenderer2>> = Yup.object({
    text:YupVldSchOf_Subtitle,
});

const YupVldSchOf_ThumbnailOverlayHoverTextRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailOverlayHoverTextRenderer>> = Yup.object({
    text:YupVldSchOf_Subtitle,
    icon:YupVldSchOf_Icon,
});

const YupVldSchOf_ThumbnailOverlayBottomPanelRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailOverlayBottomPanelRenderer>> = Yup.object({
    icon:YupVldSchOf_Icon,
});

    const YupVldSchOf_ThumbnailOverlay2 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailOverlay2>> = Yup.object({
        thumbnailOverlayBottomPanelRenderer:YupVldSchOf_ThumbnailOverlayBottomPanelRenderer,
        thumbnailOverlayHoverTextRenderer:YupVldSchOf_ThumbnailOverlayHoverTextRenderer,
        thumbnailOverlayNowPlayingRenderer:YupVldSchOf_ThumbnailOverlayNowPlayingRenderer2,
    });

        const YupVldSchOf_CompactRadioRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CompactRadioRenderer>> = Yup.object({
            playlistId:Yup.string().required(),
            thumbnail:YupVldSchOf_Thumbnail8,
            title:YupVldSchOf_Title,
            navigationEndpoint:YupVldSchOf_NavigationEndpoint,
            videoCountText:YupVldSchOf_Subtitle,
            secondaryNavigationEndpoint:YupVldSchOf_NavigationEndpoint,
            longBylineText:YupVldSchOf_HeaderText,
            trackingParams:Yup.string().required(),
            thumbnailText:YupVldSchOf_Subtitle,
            videoCountShortText:YupVldSchOf_Subtitle,
            shareUrl:Yup.string().required(),
            menu: YupVldSchOf_Menu,
            thumbnailOverlays: Yup.array().of(YupVldSchOf_ThumbnailOverlay2),
        });



   

const YupVldSchOf_ContinuationItemRenderer2 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ContinuationItemRenderer2>> = Yup.object({
    trigger:Yup.string().required(),//XXX
    continuationEndpoint:YupVldSchOf_PurpleContinuationEndpoint,//XXX
    button:YupVldSchOf_PurpleButton,//XXX
});

       //XOR union 
       const YupVldSchOf_Content4 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Content4>> = Yup.object({
        compactVideoRenderer: YupVldSchOf_CompactVideoRenderer.notRequired().default(null).nullable(),//XXX 1
        compactRadioRenderer: YupVldSchOf_CompactRadioRenderer.notRequired().default(null).nullable(), // 2 
        continuationItemRenderer: YupVldSchOf_ContinuationItemRenderer2.notRequired().default(null).nullable(),//XXX 3 , 1 XOR 2 XOR 3 
    });

    
        const YupVldSchOf_ItemSectionRenderer2 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ItemSectionRenderer2>> = Yup.object({
            contents:Yup.array().of(YupVldSchOf_Content4),//XXX 
            trackingParams:Yup.string().required(),//XXX 
            sectionIdentifier:Yup.string().required(),//XXX 
            targetId:Yup.string().required(),//XXX 
        });
            
            const YupVldSchOf_SecondaryResultsResult : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SecondaryResultsResult>> = Yup.object({
                relatedChipCloudRenderer:YupVldSchOf_RelatedChipCloudRenderer.notRequired().default(null).nullable(),//Add-XXX
                itemSectionRenderer :YupVldSchOf_ItemSectionRenderer2.notRequired().default(null).nullable(),//XXX 
                compactVideoRenderer:YupVldSchOf_CompactVideoRenderer.notRequired().default(null).nullable(),//XXX 
            });




const YupVldSchOf_NextContinuationData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.NextContinuationData>> = Yup.object({
    continuation:Yup.string().required(),
    clickTrackingParams:Yup.string().required(),
    label:YupVldSchOf_Subtitle,
});

    const YupVldSchOf_Continuation : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Continuation>> = Yup.object({
        nextContinuationData:YupVldSchOf_NextContinuationData,
    });

        const YupVldSchOf_SecondaryResultsSecondaryResults : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SecondaryResultsSecondaryResults>> = Yup.object({
            results:Yup.array().of(YupVldSchOf_SecondaryResultsResult),//XXX
            continuations: Yup.array().of(YupVldSchOf_Continuation).notRequired(),
            trackingParams:Yup.string().required(),//XXX
        });

            const YupVldSchOf_TwoColumnWatchNextResultsSecondaryResults : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TwoColumnWatchNextResultsSecondaryResults>> = Yup.object({
                secondaryResults:YupVldSchOf_SecondaryResultsSecondaryResults,//XXX
            });

                const YupVldSchOf_TwoColumnWatchNextResults : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TwoColumnWatchNextResults>> = Yup.object({
                    results:YupVldSchOf_TwoColumnWatchNextResultsResults,//XXX
                    secondaryResults:YupVldSchOf_TwoColumnWatchNextResultsSecondaryResults,//XXX
                    autoplay:YupVldSchOf_TwoColumnWatchNextResultsAutoplay,//XXX
                });

                    export const YupVldSchOf_Contents : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Contents>> = Yup.object({
                        twoColumnWatchNextResults:YupVldSchOf_TwoColumnWatchNextResults,//XXX
                    });




    

const YupVldSchOf_EndScreenVideoRendererThumbnailOverlay : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EndScreenVideoRendererThumbnailOverlay>> = Yup.object({
    thumbnailOverlayTimeStatusRenderer: YupVldSchOf_ThumbnailOverlayTimeStatusRenderer.notRequired().default(null).nullable(),//XXX
    thumbnailOverlayNowPlayingRenderer: YupVldSchOf_ThumbnailOverlayNowPlayingRenderer.notRequired().default(null).nullable(),//XXX
});


    const YupVldSchOf_EndScreenVideoRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EndScreenVideoRenderer>> = Yup.object({
        videoId:Yup.string().required(),//XXX
        thumbnail:YupVldSchOf_BackgroundClass,//XXX
        title:YupVldSchOf_ShortViewCountText,//XXX
        shortBylineText:YupVldSchOf_Byline,//XXX
        lengthText:YupVldSchOf_ShortViewCountText,//XXX
        lengthInSeconds:Yup.number().required(),//XXX
        navigationEndpoint:YupVldSchOf_CurrentVideoEndpointClass,//XXX
        trackingParams:Yup.string().required(),//XXX
        shortViewCountText:YupVldSchOf_ShortViewCountText,//XXX
        publishedTimeText:YupVldSchOf_HeaderText,//XXX
        thumbnailOverlays:Yup.array().of(YupVldSchOf_EndScreenVideoRendererThumbnailOverlay),//XXX
    });

        const YupVldSchOf_WatchNextEndScreenRendererResult : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WatchNextEndScreenRendererResult>> = Yup.object({
            endScreenVideoRenderer:YupVldSchOf_EndScreenVideoRenderer,//XXX
        });

            const YupVldSchOf_WatchNextEndScreenRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WatchNextEndScreenRenderer>> = Yup.object({
                results:Yup.array().of(YupVldSchOf_WatchNextEndScreenRendererResult),//XXX
                title:YupVldSchOf_HeaderText,//XXX
                trackingParams:Yup.string().required(),//XXX
            });

                const YupVldSchOf_EndScreen : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EndScreen>> = Yup.object({
                    watchNextEndScreenRenderer:YupVldSchOf_WatchNextEndScreenRenderer,//XXX
                });


    

const YupVldSchOf_PlayerOverlayAutoplayRendererThumbnailOverlay : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerOverlayAutoplayRendererThumbnailOverlay>> = Yup.object({
    thumbnailOverlayTimeStatusRenderer:YupVldSchOf_ThumbnailOverlayTimeStatusRenderer,//XXX
});

    const YupVldSchOf_PlayerOverlayAutoplayRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerOverlayAutoplayRenderer>> = Yup.object({
        title:YupVldSchOf_HeaderText,//XXX
        videoTitle:YupVldSchOf_ShortViewCountText,//XXX
        byline:YupVldSchOf_Byline,//XXX
        pauseText:YupVldSchOf_HeaderText,//XXX
        background:YupVldSchOf_BackgroundClass,//XXX
        countDownSecs:Yup.number().required(),//XXX
        cancelButton:YupVldSchOf_VoiceSearchButton,//XXX
        nextButton:YupVldSchOf_VoiceSearchButton,//XXX
        trackingParams:Yup.string().required(),//XXX
        closeButton:YupVldSchOf_A11YSkipNavigationButtonClass,//XXX
        thumbnailOverlays:Yup.array().of(YupVldSchOf_PlayerOverlayAutoplayRendererThumbnailOverlay),//XXX
        preferImmediateRedirect:Yup.boolean().required(),//XXX
        videoId:Yup.string().required(),//XXX
        publishedTimeText:YupVldSchOf_HeaderText,//XXX
        webShowNewAutonavCountdown:Yup.boolean().required(),//XXX
        webShowBigThumbnailEndscreen:Yup.boolean().required(),//XXX
        shortViewCountText:YupVldSchOf_ShortViewCountText,//XXX
        countDownSecsForFullscreen:Yup.number().required(),//XXX
    });

        const YupVldSchOf_PlayerOverlayRendererAutoplay : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerOverlayRendererAutoplay>> = Yup.object({
            playerOverlayAutoplayRenderer:YupVldSchOf_PlayerOverlayAutoplayRenderer,//XXX
        });


const YupVldSchOf_ShareButtonButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ShareButtonButtonRenderer>> = Yup.object({
    style: YupVldSchOf_ButtonRendererStyle ,//XXX
    size:YupVldSchOf_SizeTypeEnum,//XXX
    isDisabled:Yup.boolean().required(),//XXX
    icon:YupVldSchOf_Icon,//XXX
    navigationEndpoint:YupVldSchOf_ServiceEndpointClass,//XXX
    tooltip:Yup.string().required(),//XXX
    trackingParams:Yup.string().required(),//XXX
});

        
    const YupVldSchOf_ShareButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ShareButton>> = Yup.object({
        buttonRenderer:YupVldSchOf_ShareButtonButtonRenderer,//XXX
    });

    


const YupVldSchOf_AddToWatchLaterCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AddToWatchLaterCommand>> = Yup.object({
    clickTrackingParams:Yup.string().required(),//XXX
    commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
    playlistEditEndpoint: YupVldSchOf_AddToWatchLaterCommandPlaylistEditEndpoint.notRequired().default(null).nullable(),//XXX
    addToPlaylistServiceEndpoint: YupVldSchOf_WatchEndpoint.notRequired().default(null).nullable(),
});

    const YupVldSchOf_StickyMenuServiceItemRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyMenuServiceItemRenderer>> = Yup.object({
        text:YupVldSchOf_Subtitle,//XXX
        icon:YupVldSchOf_Icon,//XXX
        serviceEndpoint:YupVldSchOf_AddToWatchLaterCommand,//XXX
        trackingParams:Yup.string().required(),//XXX
        hasSeparator:Yup.boolean().notRequired(),
    });

        const YupVldSchOf_StickyItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyItem>> = Yup.object({
            menuServiceItemRenderer:YupVldSchOf_StickyMenuServiceItemRenderer,//XXX
        });

            const YupVldSchOf_AddToMenuMenuRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AddToMenuMenuRenderer>> = Yup.object({
                items:Yup.array().of(YupVldSchOf_StickyItem),//XXX
                trackingParams:Yup.string().required(),//XXX
            });

                const YupVldSchOf_AddToMenu : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AddToMenu>> = Yup.object({
                    menuRenderer:YupVldSchOf_AddToMenuMenuRenderer,//XXX
                });

                
            
    




const YupVldSchOf_PlayerOverlayVideoDetailsRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerOverlayVideoDetailsRenderer>> = Yup.object({
    title:YupVldSchOf_HeaderText,//XXX
    subtitle:YupVldSchOf_Subtitle,//XXX
});

    const YupVldSchOf_PlayerOverlayRendererVideoDetails : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerOverlayRendererVideoDetails>> = Yup.object({
        playerOverlayVideoDetailsRenderer:YupVldSchOf_PlayerOverlayVideoDetailsRenderer,//XXX
    });

    



const YupVldSchOf_SetSettingEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SetSettingEndpoint>> = Yup.object({
    settingItemId:Yup.string().required(),//XXX
    boolValue:Yup.boolean().required(),//XXX
    settingItemIdForClient:Yup.string().required(),//XXX
});


    const YupVldSchOf_OnAbledCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnAbledCommand>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
        setSettingEndpoint:YupVldSchOf_SetSettingEndpoint,//XXX
    });

        const YupVldSchOf_AutoplaySwitchButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AutoplaySwitchButtonRenderer>> = Yup.object({
            onEnabledCommand:YupVldSchOf_OnAbledCommand,//XXX
            onDisabledCommand:YupVldSchOf_OnAbledCommand,//XXX
            enabledAccessibilityData:YupVldSchOf_DisabledAccessibilityData,//XXX
            disabledAccessibilityData:YupVldSchOf_DisabledAccessibilityData,//XXX
            trackingParams:Yup.string().required(),//XXX
            enabled:Yup.boolean().required(),//XXX
        });

            const YupVldSchOf_AutonavToggle : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AutonavToggle>> = Yup.object({
                autoplaySwitchButtonRenderer:YupVldSchOf_AutoplaySwitchButtonRenderer,//XXX
            });

            



const YupVldSchOf_LightColorPaletteOrDarkColorPalette : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.LightColorPaletteOrDarkColorPalette>> = Yup.object({
    section1Color:Yup.number().required(),//XXX
    section2Color:Yup.number().required(),//XXX
    section3Color:Yup.number().required(),//XXX
    primaryTitleColor:Yup.number().required(),//XXX
    secondaryTitleColor:Yup.number().required(),//XXX
    section4Color:Yup.number().required(),//XXX
});

    const YupVldSchOf_ThumbnailDetails : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailDetails>> = Yup.object({
        thumbnails : Yup.array().of(YupVldSchOf_Thumbnail).nullable().notRequired(),//XXX
        lightColorPalette:YupVldSchOf_LightColorPaletteOrDarkColorPalette,//XXX
        darkColorPalette:YupVldSchOf_LightColorPaletteOrDarkColorPalette,//XXX
    });



const YupVldSchOf_SetActivePanelItemAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SetActivePanelItemAction>> = Yup.object({
    panelTargetId:Yup.string().required(),//XXX
    itemIndex:Yup.number().required(),//XXX
});

    const YupVldSchOf_OnActiveCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnActiveCommand>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        setActivePanelItemAction:YupVldSchOf_SetActivePanelItemAction,//XXX
    });

        const YupVldSchOf_ChapterRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ChapterRenderer>> = Yup.object({
            title: YupVldSchOf_HeaderText ,//XXX
            timeRangeStartMillis:Yup.number().required(),//XXX
            onActiveCommand:YupVldSchOf_OnActiveCommand,//XXX
            thumbnail:YupVldSchOf_ThumbnailDetails,//XXX
        });

            const YupVldSchOf_Chapter : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Chapter>> = Yup.object({
                chapterRenderer:YupVldSchOf_ChapterRenderer,//XXX
            });

    

const YupVldSchOf_RepeatChapterCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.RepeatChapterCommand>> = Yup.object({
    repeat:Yup.string().required(),//XXX
});

    const YupVldSchOf_Command15 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Command15>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        repeatChapterCommand :YupVldSchOf_RepeatChapterCommand,//XXX
    });

    
        const YupVldSchOf_ButtonRenderer15 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ButtonRenderer15>> = Yup.object({
            style: YupVldSchOf_ButtonRendererStyle ,//XXX
            text:YupVldSchOf_Subtitle,//XXX
            trackingParams:Yup.string().required(),//XXX
            command: YupVldSchOf_Command15 ,//XXX
        });

            const YupVldSchOf_ActionButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ActionButton>> = Yup.object({
                buttonRenderer:YupVldSchOf_ButtonRenderer15,//XXX
            });

                const YupVldSchOf_NotificationActionRenderer11 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.NotificationActionRenderer11>> = Yup.object({
                    responseText:YupVldSchOf_HeaderText,//XXX
                    trackingParams:Yup.string().required(),//XXX
                    actionButton:YupVldSchOf_ActionButton,//XXX
                    
                });

                

                    const YupVldSchOf_Popup11 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Popup11>> = Yup.object({
                        notificationActionRenderer :YupVldSchOf_NotificationActionRenderer11,//XXX
                    });

                        const YupVldSchOf_OpenPopupAction11 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OpenPopupAction11>> = Yup.object({
                            popup:YupVldSchOf_Popup11,//XXX
                            popupType:YupVldSchOf_PopupType ,//XXX
                        });

                            const YupVldSchOf_OnChapterRepeat : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OnChapterRepeat>> = Yup.object({
                                clickTrackingParams:Yup.string().required(),//XXX
                                openPopupAction:YupVldSchOf_OpenPopupAction11,//XXX
                            });


const YupVldSchOf_TimedMarkerDecorationRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TimedMarkerDecorationRenderer>> = Yup.object({
    visibleTimeRangeStartMillis:Yup.number().required(),//XXX
    visibleTimeRangeEndMillis:Yup.number().required(),//XXX
    decorationTimeMillis:Yup.number().required(),//XXX
    label:YupVldSchOf_Subtitle,//XXX
    icon:Yup.string().required(),//XXX
    trackingParams:Yup.string().required(),//XXX
});


    const YupVldSchOf_HeatMarkersDecoration : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HeatMarkersDecoration>> = Yup.object({
        timedMarkerDecorationRenderer:YupVldSchOf_TimedMarkerDecorationRenderer,//XXX
    });

        
        const YupVldSchOf_HeatmapRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HeatmapRenderer>> = Yup.object({
            maxHeightDp:Yup.number().required(),//XXX
            minHeightDp:Yup.number().required(),//XXX
            showHideAnimationDurationMillis:Yup.number().required(),//XXX
            heatMarkers:Yup.array().of(YupVldSchOf_HeatMarker),//XXX
            heatMarkersDecorations:Yup.array().of(YupVldSchOf_HeatMarkersDecoration),//XXX
        });

            
            const YupVldSchOf_Heatmap : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Heatmap>> = Yup.object({
                heatmapRenderer:YupVldSchOf_HeatmapRenderer,//XXX
            });

    
                const YupVldSchOf_MarkerValue : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MarkerValue>> = Yup.object({
                    trackingParams:Yup.string().required(),//XXX
                    chapters: Yup.array().of(YupVldSchOf_Chapter).notRequired(),//XXX
                    onChapterRepeat: YupVldSchOf_OnChapterRepeat.notRequired().default(null).nullable(),
                    heatmap:YupVldSchOf_Heatmap,//XXX
                });

                

                    const YupVldSchOf_MarkersMap : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MarkersMap>> = Yup.object({
                        key:Yup.string().required(),//XXX
                        value:YupVldSchOf_MarkerValue,//XXX
                    });

                        const YupVldSchOf_MultiMarkersPlayerBarRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MultiMarkersPlayerBarRenderer>> = Yup.object({
                            visibleOnLoad:YupVldSchOf_VisibleOnLoad,//XXX
                            markersMap:Yup.array().of(YupVldSchOf_MarkersMap),//XXX
                        });

                            const YupVldSchOf_PlayerBar : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerBar>> = Yup.object({
                                multiMarkersPlayerBarRenderer:YupVldSchOf_MultiMarkersPlayerBarRenderer,//XXX
                            });



const YupVldSchOf_ButtonRenderer16 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ButtonRenderer16>> = Yup.object({
    text:YupVldSchOf_Subtitle,//XXX
    trackingParams:Yup.string().required(),//XXX
    command: YupVldSchOf_TentacledCommand ,//XXX
});

    const YupVldSchOf_PlayerBarActionButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerBarActionButton>> = Yup.object({
        buttonRenderer:YupVldSchOf_ButtonRenderer16,//XXX
    });

        const YupVldSchOf_DecoratedPlayerBarRendererDecoratedPlayerBarRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DecoratedPlayerBarRendererDecoratedPlayerBarRenderer>> = Yup.object({
            playerBar:YupVldSchOf_PlayerBar,//XXX
            playerBarActionButton: YupVldSchOf_PlayerBarActionButton.notRequired().default(null).nullable(),
        });

            const YupVldSchOf_DecoratedPlayerBarRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DecoratedPlayerBarRenderer>> = Yup.object({
                decoratedPlayerBarRenderer:YupVldSchOf_DecoratedPlayerBarRendererDecoratedPlayerBarRenderer,//XXX
            });


                const YupVldSchOf_PlayerOverlayRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerOverlayRenderer>> = Yup.object({
                    endScreen:YupVldSchOf_EndScreen,//XXX
                    autoplay:YupVldSchOf_PlayerOverlayRendererAutoplay,//XXX
                    shareButton:YupVldSchOf_ShareButton,//XXX
                    addToMenu:YupVldSchOf_AddToMenu,//XXX
                    videoDetails:YupVldSchOf_PlayerOverlayRendererVideoDetails,//XXX
                    autonavToggle:YupVldSchOf_AutonavToggle,//XXX
                    decoratedPlayerBarRenderer:YupVldSchOf_DecoratedPlayerBarRenderer,//XXX
                });

                    export const YupVldSchOf_PlayerOverlays : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerOverlays>> = Yup.object({
                        playerOverlayRenderer:YupVldSchOf_PlayerOverlayRenderer,//XXX
                    });
                






const YupVldSchOf_ClipAdStateRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ClipAdStateRenderer>> = Yup.object({
    title:YupVldSchOf_Subtitle,//XXX
    body:YupVldSchOf_Subtitle,//XXX
});


    const YupVldSchOf_AdStateOverlay : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdStateOverlay>> = Yup.object({
        clipAdStateRenderer:YupVldSchOf_ClipAdStateRenderer,//XXX
    });



const YupVldSchOf_ClipCreationTextInputRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ClipCreationTextInputRenderer>> = Yup.object({
    placeholderText:YupVldSchOf_Subtitle,//XXX
    maxCharacterLimit:Yup.number().required(),//XXX
});

    const YupVldSchOf_TitleInput : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TitleInput>> = Yup.object({
        clipCreationTextInputRenderer:YupVldSchOf_ClipCreationTextInputRenderer,//XXX
    });


const YupVldSchOf_ClipCreationScrubberRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ClipCreationScrubberRenderer>> = Yup.object({
    lengthTemplate:Yup.string().required(),//XXX
    maxLengthMs:Yup.number().required(),//XXX
    minLengthMs:Yup.number().required(),//XXX
    defaultLengthMs:Yup.number().required(),//XXX
    windowSizeMs:Yup.number().required(),//XXX
    startAccessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
    endAccessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
    durationAccessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
});

    const YupVldSchOf_Scrubber : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Scrubber>> = Yup.object({
        clipCreationScrubberRenderer:YupVldSchOf_ClipCreationScrubberRenderer,//XXX
    });

        const YupVldSchOf_ClipCreationRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ClipCreationRenderer>> = Yup.object({
            trackingParams:Yup.string().required(),//XXX
            userAvatar:YupVldSchOf_BackgroundClass,//XXX
            titleInput:YupVldSchOf_TitleInput,//XXX
            scrubber:YupVldSchOf_Scrubber,//XXX
            saveButton:YupVldSchOf_A11YSkipNavigationButtonClass,//XXX
            displayName:YupVldSchOf_HeaderText,//XXX
            publicityLabel:Yup.string().required(),//XXX
            cancelButton:YupVldSchOf_A11YSkipNavigationButtonClass,//XXX
            adStateOverlay:YupVldSchOf_AdStateOverlay,//XXX
            externalVideoId:Yup.string().required(),//XXX
            publicityLabelIcon:Yup.string().required(),//XXX
        });

            const YupVldSchOf_ClipSectionRendererContent : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ClipSectionRendererContent>> = Yup.object({
                clipCreationRenderer:YupVldSchOf_ClipCreationRenderer,//XXX
            });

                const YupVldSchOf_ClipSectionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ClipSectionRenderer>> = Yup.object({
                    contents:Yup.array().of(YupVldSchOf_ClipSectionRendererContent),//XXX
                });




const YupVldSchOf_FactoidRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FactoidRenderer>> = Yup.object({
    value:YupVldSchOf_HeaderText,//XXX
    label:YupVldSchOf_HeaderText,//XXX
    accessibilityText:Yup.string().required(),//XXX
});

    const YupVldSchOf_Factoid : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Factoid>> = Yup.object({
        factoidRenderer:YupVldSchOf_FactoidRenderer,//XXX
    });

    const YupVldSchOf_ChannelThumbnail : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ChannelThumbnail>> = Yup.object({
        thumbnails:Yup.array().of(YupVldSchOf_CommonConfig),//XXX
    });

        const YupVldSchOf_VideoDescriptionHeaderRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VideoDescriptionHeaderRenderer>> = Yup.object({
            title:YupVldSchOf_Subtitle,//XXX
            channel:YupVldSchOf_HeaderText,//XXX
            views:YupVldSchOf_HeaderText,//XXX
            publishDate:YupVldSchOf_HeaderText,//XXX
            factoid:Yup.array().of(YupVldSchOf_Factoid),//XXX
            channelNavigationEndpoint:YupVldSchOf_ChannelNavigationEndpointClass,//XXX
            channelThumbnail:YupVldSchOf_ChannelThumbnail,//XXX
        });


const YupVldSchOf_ExpandableVideoDescriptionBodyRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ExpandableVideoDescriptionBodyRenderer>> = Yup.object({
    showMoreText:YupVldSchOf_HeaderText,//XXX
    showLessText:YupVldSchOf_HeaderText,//XXX
    attributedDescriptionBodyText:YupVldSchOf_AttributedDescription,//XXX
});






        
   



const YupVldSchOf_DefaultMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DefaultMetadata>> = Yup.object({
    simpleText:Yup.string().notRequired(),
    runs: Yup.array().of(YupVldSchOf_BylineRun).notRequired(),
});

    const YupVldSchOf_InfoRowRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.InfoRowRenderer>> = Yup.object({
        title:YupVldSchOf_HeaderText,
        defaultMetadata: YupVldSchOf_DefaultMetadata.notRequired().default(null).nullable(),
        trackingParams:Yup.string().required(),
        infoRowExpandStatusKey:Yup.string().notRequired(),
        expandedMetadata: YupVldSchOf_HeaderText.notRequired().default(null).nullable(),
        expandIcon: YupVldSchOf_Icon.notRequired().default(null).nullable(),
    });

        const YupVldSchOf_InfoRow : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.InfoRow>> = Yup.object({
            infoRowRenderer:YupVldSchOf_InfoRowRenderer,
        });

            const YupVldSchOf_CarouselLockupRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CarouselLockupRenderer>> = Yup.object({
                infoRows:Yup.array().of(YupVldSchOf_InfoRow),
            });

                const YupVldSchOf_CarouselLockup : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CarouselLockup>> = Yup.object({
                    carouselLockupRenderer:YupVldSchOf_CarouselLockupRenderer,
                });

    
const YupVldSchOf_CommandBrowseEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommandBrowseEndpoint>> = Yup.object({
    browseId:Yup.string().required(),//XXX
    params:Yup.string().required(),//XXX
});

    const YupVldSchOf_MagentaCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MagentaCommand>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        commandMetadata:YupVldSchOf_EndpointCommandMetadata,//XXX
        browseEndpoint:YupVldSchOf_CommandBrowseEndpoint,//XXX
    });

        const YupVldSchOf_CreatorAboutButtonButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CreatorAboutButtonButtonRenderer>> = Yup.object({
            style:Yup.string().required(),//XXX
            size:YupVldSchOf_SizeTypeEnum,//XXX
            isDisabled:Yup.boolean().required(),//XXX
            text:YupVldSchOf_HeaderText,//XXX
            icon:YupVldSchOf_Icon,//XXX
            trackingParams:Yup.string().required(),//XXX
            command:YupVldSchOf_MagentaCommand,//XXX
        });

            const YupVldSchOf_CreatorButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CreatorButton>> = Yup.object({
                buttonRenderer:YupVldSchOf_CreatorAboutButtonButtonRenderer,//XXX
            });

                const YupVldSchOf_VideoDescriptionInfocardsSectionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VideoDescriptionInfocardsSectionRenderer>> = Yup.object({
                    sectionTitle:YupVldSchOf_HeaderText,//XXX
                    creatorVideosButton:YupVldSchOf_CreatorButton,//XXX
                    creatorAboutButton:YupVldSchOf_CreatorButton,//XXX
                    sectionSubtitle:YupVldSchOf_ShortViewCountText,//XXX
                    channelAvatar:YupVldSchOf_ChannelThumbnail,//XXX
                    channelEndpoint:YupVldSchOf_ChannelNavigationEndpointClass,//XXX
                    trackingParams:Yup.string().required(),//XXX
                });

                

            

    const YupVldSchOf_FluffyContinuationEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyContinuationEndpoint>> = Yup.object({
        clickTrackingParams:Yup.string().required(),
        commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,
        getTranscriptEndpoint:YupVldSchOf_GetTranscriptEndpointClass,
    });



        const YupVldSchOf_FluffyContinuationItemRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyContinuationItemRenderer>> = Yup.object({
            trigger:Yup.string().required(),
            continuationEndpoint:YupVldSchOf_FluffyContinuationEndpoint,
        });

        

const YupVldSchOf_CommentRepliesRendererContent : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommentRepliesRendererContent>> = Yup.object({
    continuationItemRenderer:YupVldSchOf_PurpleContinuationItemRenderer,//XXX
});

    const YupVldSchOf_FluffyItemSectionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyItemSectionRenderer>> = Yup.object({
        contents:Yup.array().of(YupVldSchOf_CommentRepliesRendererContent),//XXX
        trackingParams:Yup.string().required(),//XXX
        sectionIdentifier:Yup.string().required(),//XXX
        targetId:Yup.string().required(),//XXX
    });

        const YupVldSchOf_SectionListRendererContent : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SectionListRendererContent>> = Yup.object({
            itemSectionRenderer:YupVldSchOf_FluffyItemSectionRenderer,//XXX
        });

            const YupVldSchOf_SectionListRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SectionListRenderer>> = Yup.object({
                contents:Yup.array().of(YupVldSchOf_SectionListRendererContent),//XXX
                trackingParams:Yup.string().required(),//XXX
            });

            




const YupVldSchOf_SubMenuItemServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SubMenuItemServiceEndpoint>> = Yup.object({
    clickTrackingParams:Yup.string().required(),
    commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,
    continuationCommand:YupVldSchOf_ServiceEndpointContinuationCommand,
});

    const YupVldSchOf_SubMenuItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SubMenuItem>> = Yup.object({
        title:Yup.string().required(),
        selected:Yup.boolean().required(),
        serviceEndpoint:YupVldSchOf_SubMenuItemServiceEndpoint,
        trackingParams:Yup.string().required(),
    });

        const YupVldSchOf_MenuSortFilterSubMenuRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuSortFilterSubMenuRenderer>> = Yup.object({
            subMenuItems:Yup.array().of(YupVldSchOf_SubMenuItem),
            icon:YupVldSchOf_Icon,
            accessibility:YupVldSchOf_DisabledAccessibilityData,
            trackingParams:Yup.string().required(),
        });

         


        const YupVldSchOf_TentacledMenuServiceItemRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledMenuServiceItemRenderer>> = Yup.object({
            text:YupVldSchOf_Subtitle,
            serviceEndpoint:YupVldSchOf_OnResponseReceivedEndpoint,
            trackingParams:Yup.string().required(),
        });

    const YupVldSchOf_TentacledItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TentacledItem>> = Yup.object({
        menuServiceItemRenderer:YupVldSchOf_TentacledMenuServiceItemRenderer,
    });   

const YupVldSchOf_FluffyMenuRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FluffyMenuRenderer>> = Yup.object({
    items:Yup.array().of(YupVldSchOf_TentacledItem),
    trackingParams:Yup.string().required(),
    accessibility:YupVldSchOf_DisabledAccessibilityData,
});

    const YupVldSchOf_EngagementPanelTitleHeaderRendererMenu : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EngagementPanelTitleHeaderRendererMenu>> = Yup.object({
        sortFilterSubMenuRenderer: YupVldSchOf_MenuSortFilterSubMenuRenderer.notRequired().default(null).nullable(),
        menuRenderer: YupVldSchOf_FluffyMenuRenderer.notRequired().default(null).nullable(),
    });

        const YupVldSchOf_EngagementPanelTitleHeaderRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EngagementPanelTitleHeaderRenderer>> = Yup.object({
            title:YupVldSchOf_Title,//XXX
            informationButton: YupVldSchOf_VoiceSearchButton.notRequired().default(null).nullable(),//XXX
            visibilityButton:YupVldSchOf_VoiceSearchButton,//XXX
            trackingParams:Yup.string().required(),//XXX
            contextualInfo: YupVldSchOf_Subtitle.notRequired().default(null).nullable(),
            menu: YupVldSchOf_EngagementPanelTitleHeaderRendererMenu.notRequired().default(null).nullable(),
        });

            const YupVldSchOf_Header : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Header>> = Yup.object({
                engagementPanelTitleHeaderRenderer:YupVldSchOf_EngagementPanelTitleHeaderRenderer,//XXX
            });



            


const YupVldSchOf_EndpointBrowseEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EndpointBrowseEndpoint>> = Yup.object({
    browseId:Yup.string().required(),//XXX
});

    const YupVldSchOf_TopicLinkRendererEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TopicLinkRendererEndpoint>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        commandMetadata:YupVldSchOf_EndpointCommandMetadata,//XXX
        browseEndpoint:YupVldSchOf_EndpointBrowseEndpoint,//XXX
    });

        const YupVldSchOf_TopicLinkRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TopicLinkRenderer>> = Yup.object({
            title:YupVldSchOf_HeaderText,
            thumbnailDetails:YupVldSchOf_ChannelThumbnail,
            endpoint:YupVldSchOf_TopicLinkRendererEndpoint,
            callToActionIcon:YupVldSchOf_Icon,
            trackingParams:Yup.string().required(),
        });

            const YupVldSchOf_TopicLink : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TopicLink>> = Yup.object({
                topicLinkRenderer:YupVldSchOf_TopicLinkRenderer,
            });  


                const YupVldSchOf_VideoDescriptionMusicSectionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VideoDescriptionMusicSectionRenderer>> = Yup.object({
                    sectionTitle:YupVldSchOf_HeaderText,
                    carouselLockups:Yup.array().of(YupVldSchOf_CarouselLockup),
                    topicLink:YupVldSchOf_TopicLink,
                });


                    const YupVldSchOf_StructuredDescriptionContentRendererItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StructuredDescriptionContentRendererItem>> = Yup.object({
                        videoDescriptionHeaderRenderer: YupVldSchOf_VideoDescriptionHeaderRenderer.notRequired().default(null).nullable(),//XXX
                        expandableVideoDescriptionBodyRenderer: YupVldSchOf_ExpandableVideoDescriptionBodyRenderer.notRequired().default(null).nullable(),//XXX
                        videoDescriptionMusicSectionRenderer: YupVldSchOf_VideoDescriptionMusicSectionRenderer.notRequired().default(null).nullable(),
                        videoDescriptionInfocardsSectionRenderer: YupVldSchOf_VideoDescriptionInfocardsSectionRenderer.notRequired().default(null).nullable(),//XXX
                    });

                    
                        const YupVldSchOf_StructuredDescriptionContentRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StructuredDescriptionContentRenderer>> = Yup.object({
                            items:Yup.array().of(YupVldSchOf_StructuredDescriptionContentRendererItem),//XXX
                        });


                            const YupVldSchOf_EngagementPanelSectionListRendererContent : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EngagementPanelSectionListRendererContent>> = Yup.object({
                                adsEngagementPanelContentRenderer: YupVldSchOf_AdsEngagementPanelContentRenderer.notRequired().default(null).nullable(),//XXX
                                clipSectionRenderer: YupVldSchOf_ClipSectionRenderer.notRequired().default(null).nullable(),//XXX
                                structuredDescriptionContentRenderer: YupVldSchOf_StructuredDescriptionContentRenderer.notRequired().default(null).nullable(),//XXX
                                sectionListRenderer: YupVldSchOf_SectionListRenderer.notRequired().default(null).nullable(),//XXX
                                continuationItemRenderer: YupVldSchOf_FluffyContinuationItemRenderer.notRequired().default(null).nullable(),
                            });

                            
                                const YupVldSchOf_EngagementPanelSectionListRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EngagementPanelSectionListRenderer>> = Yup.object({
                                    content:YupVldSchOf_EngagementPanelSectionListRendererContent,//XXX
                                    targetId:Yup.string().required(),//XXX
                                    visibility:YupVldSchOf_VisibilityEnum,//XXX
                                    panelIdentifier:Yup.string().notRequired(),//XXX 2
                                    header: YupVldSchOf_Header.notRequired().default(null).nullable(),//XXX 2
                                    onShowCommands: Yup.array().of(YupVldSchOf_OnShowCommandElement).notRequired().default(null).nullable(),//XXX
                                    loggingDirectives:YupVldSchOf_OfflineabilityEntityLoggingDirectives,//XXX
                                    veType:Yup.number().notRequired(),
                                });

                                    export const YupVldSchOf_EngagementPanel : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EngagementPanel>> = Yup.object({
                                        engagementPanelSectionListRenderer:YupVldSchOf_EngagementPanelSectionListRenderer,//XXX
                                    });



        const YupVldSchOf_TopbarLogoRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TopbarLogoRenderer>> = Yup.object({
            iconImage:YupVldSchOf_Icon,//XXX
            tooltipText:YupVldSchOf_Subtitle,//XXX
            endpoint:YupVldSchOf_TopicLinkRendererEndpoint,//XXX
            trackingParams:Yup.string().required(),//XXX
            overrideEntityKey:Yup.string().required(),//XXX
        });

            const YupVldSchOf_Logo : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Logo>> = Yup.object({
                topbarLogoRenderer:YupVldSchOf_TopbarLogoRenderer,//XXX
            });


const YupVldSchOf_WebSearchboxConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WebSearchboxConfig>> = Yup.object({
    requestLanguage:Yup.string().required(),//XXX
    requestDomain:Yup.string().required(),//XXX
    hasOnscreenKeyboard:Yup.boolean().required(),//XXX
    focusSearchbox:Yup.boolean().required(),//XXX
});

    const YupVldSchOf_FusionSearchboxRendererConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FusionSearchboxRendererConfig>> = Yup.object({
        webSearchboxConfig:YupVldSchOf_WebSearchboxConfig,//XXX
    });

    

    


const YupVldSchOf_SearchEndpointSearchEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SearchEndpointSearchEndpoint>> = Yup.object({
        query:Yup.string().matches(".*"),//XXX
});

    const YupVldSchOf_FusionSearchboxRendererSearchEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FusionSearchboxRendererSearchEndpoint>> = Yup.object({
        clickTrackingParams:Yup.string().required(),//XXX
        commandMetadata:YupVldSchOf_EndpointCommandMetadata,//XXX
        searchEndpoint:YupVldSchOf_SearchEndpointSearchEndpoint,//XXX
    });

        const YupVldSchOf_FusionSearchboxRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FusionSearchboxRenderer>> = Yup.object({
            icon:YupVldSchOf_Icon,//XXX
            placeholderText:YupVldSchOf_Subtitle,//XXX
            config:YupVldSchOf_FusionSearchboxRendererConfig,//XXX
            trackingParams:Yup.string().required(),//XXX
            searchEndpoint:YupVldSchOf_FusionSearchboxRendererSearchEndpoint,//XXX
            clearButton:YupVldSchOf_VoiceSearchButton,//XXX
        });

            const YupVldSchOf_Searchbox : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Searchbox>> = Yup.object({
                fusionSearchboxRenderer:YupVldSchOf_FusionSearchboxRenderer,//XXX
            });

const YupVldSchOf_PopupMultiPageMenuRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PopupMultiPageMenuRenderer>> = Yup.object({
        trackingParams:Yup.string().required(),//XXX
        style:Yup.string().required(),//XXX
        showLoadingSpinner:Yup.boolean().required(),//XXX
});

    const YupVldSchOf_HilariousPopup : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HilariousPopup>> = Yup.object({
        multiPageMenuRenderer:YupVldSchOf_PopupMultiPageMenuRenderer,//XXX
    });

        const YupVldSchOf_IndecentOpenPopupAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.IndecentOpenPopupAction>> = Yup.object({
            popup:YupVldSchOf_HilariousPopup,//XXX
            popupType:YupVldSchOf_PopupType,
            beReused:Yup.boolean().required(),//XXX
        });

            const YupVldSchOf_CunningAction : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CunningAction>> = Yup.object({
                clickTrackingParams:Yup.string().required(),//XXX
                openPopupAction:YupVldSchOf_IndecentOpenPopupAction,//XXX
            });

                const YupVldSchOf_MenuRequestSignalServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuRequestSignalServiceEndpoint>> = Yup.object({
                    signal:Yup.string().required(),//XXX
                    actions:Yup.array().of(YupVldSchOf_CunningAction),//XXX
                });

                    const YupVldSchOf_MenuRequest : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuRequest>> = Yup.object({
                        clickTrackingParams:Yup.string().required(),//XXX
                        commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX
                        signalServiceEndpoint:YupVldSchOf_MenuRequestSignalServiceEndpoint,//XXX
                    });

                        



                    const YupVldSchOf_CompactLinkRendererNavigationEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CompactLinkRendererNavigationEndpoint>> = Yup.object({
                        clickTrackingParams:Yup.string().required(),//XXX
                        commandMetadata:YupVldSchOf_EndpointCommandMetadata,//XXX
                        uploadEndpoint: YupVldSchOf_AdsEngagementPanelContentRenderer.notRequired().default(null).nullable(),//XXX
                        signalNavigationEndpoint: YupVldSchOf_Signal.notRequired().default(null).nullable(),//XXX
                    });

                        const YupVldSchOf_CompactLinkRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CompactLinkRenderer>> = Yup.object({
                            icon:YupVldSchOf_Icon,//XXX
                            title:YupVldSchOf_Subtitle,//XXX
                            navigationEndpoint:YupVldSchOf_CompactLinkRendererNavigationEndpoint,//XXX
                            trackingParams:Yup.string().required(),//XXX
                            style:Yup.string().required(),//XXX
                        });

                            const YupVldSchOf_MultiPageMenuSectionRendererItem : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MultiPageMenuSectionRendererItem>> = Yup.object({
                                compactLinkRenderer:YupVldSchOf_CompactLinkRenderer,//XXX
                            });


                                const YupVldSchOf_MultiPageMenuSectionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MultiPageMenuSectionRenderer>> = Yup.object({
                                    items:Yup.array().of(YupVldSchOf_MultiPageMenuSectionRendererItem),//XXX
                                    trackingParams:Yup.string().required(),//XXX
                                });

                                    const YupVldSchOf_MultiPageMenuRendererSection : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MultiPageMenuRendererSection>> = Yup.object({
                                        multiPageMenuSectionRenderer:YupVldSchOf_MultiPageMenuSectionRenderer,//XXX
                                    });

                                        const YupVldSchOf_MenuRendererMultiPageMenuRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MenuRendererMultiPageMenuRenderer>> = Yup.object({
                                            sections:Yup.array().of(YupVldSchOf_MultiPageMenuRendererSection),//XXX
                                            trackingParams:Yup.string().required(),//XXX
                                            style:Yup.string().required(),//XXX
                                        });

                                                                    
                                            const YupVldSchOf_TopbarMenuButtonRendererMenuRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TopbarMenuButtonRendererMenuRenderer>> = Yup.object({
                                                multiPageMenuRenderer:YupVldSchOf_MenuRendererMultiPageMenuRenderer,//XXX
                                            });

                                                const YupVldSchOf_TopbarMenuButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TopbarMenuButtonRenderer>> = Yup.object({
                                                    icon: YupVldSchOf_Icon.notRequired().default(null).nullable(),//XXX 1 
                                                    menuRenderer: YupVldSchOf_TopbarMenuButtonRendererMenuRenderer.notRequired().default(null).nullable(),//XXX 1
                                                    trackingParams:Yup.string().required(),//XXX
                                                    accessibility:YupVldSchOf_DisabledAccessibilityData,//XXX
                                                    tooltip:Yup.string().required(),//XXX
                                                    style: YupVldSchOf_ButtonRendererStyle.notRequired().default(null).nullable(),//XXX 1 //TEST 10/09
                                                    avatar: YupVldSchOf_Avatar.notRequired().default(null).nullable(),//XXX 2
                                                    menuRequest: YupVldSchOf_MenuRequest.notRequired().default(null).nullable(),//XXX 2 , 1 XOR 2 ????
                                                });

                                        

                                          






                const YupVldSchOf_HotkeyDialogSectionOptionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HotkeyDialogSectionOptionRenderer>> = Yup.object({
                    label:YupVldSchOf_Subtitle,//XXX
                    hotkey:Yup.string().required(),//XXX
                    hotkeyAccessibilityLabel: YupVldSchOf_DisabledAccessibilityData.notRequired().default(null).nullable(),//XXX
                });

                    const YupVldSchOf_Option : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Option>> = Yup.object({
                        hotkeyDialogSectionOptionRenderer:YupVldSchOf_HotkeyDialogSectionOptionRenderer,//XXX
                    });
        
        
                        const YupVldSchOf_HotkeyDialogSectionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HotkeyDialogSectionRenderer>> = Yup.object({
                            title:YupVldSchOf_Subtitle,//XXX
                            options:Yup.array().of(YupVldSchOf_Option),//XXX
                        });

                            const YupVldSchOf_HotkeyDialogRendererSection : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HotkeyDialogRendererSection>> = Yup.object({
                                hotkeyDialogSectionRenderer:YupVldSchOf_HotkeyDialogSectionRenderer,//XXX
                            });

                            const YupVldSchOf_HotkeyDialogRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HotkeyDialogRenderer>> = Yup.object({
                                title:YupVldSchOf_Subtitle,//XXX
                                sections:Yup.array().of(YupVldSchOf_HotkeyDialogRendererSection),//XXX    
                                dismissButton:YupVldSchOf_A11YSkipNavigationButtonClass,//XXX
                                trackingParams:Yup.string().required(),//XXX
                            });

                                const YupVldSchOf_HotkeyDialog : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HotkeyDialog>> = Yup.object({
                                    hotkeyDialogRenderer:YupVldSchOf_HotkeyDialogRenderer,//XXX
                                });


              
            const YupVldSchOf_UpdateUnseenCountEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.UpdateUnseenCountEndpoint>> = Yup.object({
                    clickTrackingParams:Yup.string().required(),//XXX 
                    commandMetadata:YupVldSchOf_AddToWatchLaterCommandCommandMetadata,//XXX 
                    signalServiceEndpoint:YupVldSchOf_Signal,//XXX 
            });

const YupVldSchOf_notificationButtonRenderStyle = Yup.mixed<typeof ytInitialData.NotificationButtonRendererStyle[keyof typeof ytInitialData.NotificationButtonRendererStyle]>().oneOf(Object.values(ytInitialData.NotificationButtonRendererStyle)) ;//XXX
 
                 const YupVldSchOf_NotificationTopbarButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.NotificationTopbarButtonRenderer>> = Yup.object({
                    icon:YupVldSchOf_Icon,//XXX
                    menuRequest:YupVldSchOf_MenuRequest,//XXX
                    style: YupVldSchOf_notificationButtonRenderStyle ,//XXX 
                    trackingParams:Yup.string().required(),//XXX 
                    accessibility:YupVldSchOf_DisabledAccessibilityData,//XXX 
                    tooltip:Yup.string().required(),//XXX 
                    updateUnseenCountEndpoint:YupVldSchOf_UpdateUnseenCountEndpoint,//XXX 
                    notificationCount:Yup.number().required(),//XXX 
                    handlerDatas:Yup.array().of(Yup.string()).required(),//XXX 
                });

                    const YupVldSchOf_TopbarButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TopbarButton>> = Yup.object({
                        topbarMenuButtonRenderer: YupVldSchOf_TopbarMenuButtonRenderer.notRequired().default(null).nullable(),//XXX
                        notificationTopbarButtonRenderer: YupVldSchOf_NotificationTopbarButtonRenderer.notRequired().default(null).nullable(),//XXX
                    });


                const YupVldSchOf_BackButtonButtonRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.BackButtonButtonRenderer>> = Yup.object({
                    trackingParams:Yup.string().required(),//XXX
                    command:YupVldSchOf_OnResponseReceivedEndpoint,//XXX
                });

                        
                    const YupVldSchOf_BackButtonClass : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.BackButtonClass>> = Yup.object({
                        buttonRenderer:YupVldSchOf_BackButtonButtonRenderer,//XXX
                    });

                        const YupVldSchOf_DesktopTopbarRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DesktopTopbarRenderer>> = Yup.object({
                            logo:YupVldSchOf_Logo,//XXX
                            searchbox:YupVldSchOf_Searchbox,//XXX
                            trackingParams:Yup.string().required(),//XXX
                            countryCode:Yup.string().required(),//XXX
                            topbarButtons:Yup.array().of(YupVldSchOf_TopbarButton),//XXX
                            hotkeyDialog:YupVldSchOf_HotkeyDialog,//XXX
                            backButton:YupVldSchOf_BackButtonClass,//XXX
                            forwardButton:YupVldSchOf_BackButtonClass,//XXX
                            a11ySkipNavigationButton:YupVldSchOf_A11YSkipNavigationButtonClass,//XXX //ICI
                            voiceSearchButton:YupVldSchOf_VoiceSearchButton,//XXX
                        });
                        
                            export const YupVldSchOf_Topbar : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Topbar>> = Yup.object({
                                desktopTopbarRenderer:YupVldSchOf_DesktopTopbarRenderer,//XXX
                            });
                        
                                export const YupVldSchOf_Response : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Response>> = Yup.object({
                                    responseContext:YupVldSchOf_ResponseResponseContext,//XXX
                                    contents:YupVldSchOf_Contents.notRequired().default(null).nullable(),//.default(null).nullable(),//XXX
                                    currentVideoEndpoint:YupVldSchOf_CurrentVideoEndpointClass.notRequired().default(null).nullable(),//XXX
                                    trackingParams:Yup.string().required(),//XXX
                                    playerOverlays:YupVldSchOf_PlayerOverlays.notRequired().default(null).nullable(),//XXX
                                    onResponseReceivedEndpoints:Yup.array().of(YupVldSchOf_OnResponseReceivedEndpoint).notRequired().default(null).nullable(),//XXX
                                    engagementPanels:Yup.array().of(YupVldSchOf_EngagementPanel).notRequired().default(null).nullable(),//XXX
                                    topbar:YupVldSchOf_Topbar.notRequired().default(null).nullable(),//XXX
                                    pageVisualEffects:Yup.array().of(YupVldSchOf_PageVisualEffect).notRequired().default(null).nullable(),//XXX
                                    frameworkUpdates:YupVldSchOf_ResponseFrameworkUpdates.notRequired().default(null).nullable(),//XXX
                                });


//------------------------------------------------

//A FAIRE : reorganiser bottom up les schemas de validation


const YupVldSchOf_PurpleWebResponseContextExtensionData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PurpleWebResponseContextExtensionData>> = Yup.object({
    hasDecorated: Yup.boolean().required(),
})
    
    const YupVldSchOf_PlayerResponseResponseContext : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerResponseResponseContext>> = Yup.object({
        serviceTrackingParams: Yup.array().of(YupVldSchOf_ServiceTrackingParam).required(),//XXX
        mainAppWebResponseContext: YupVldSchOf_MainAppWebResponseContext,
        webResponseContextExtensionData: YupVldSchOf_PurpleWebResponseContextExtensionData,
    })


const YupVldSchOf_MiniplayerRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MiniplayerRenderer>> = Yup.object({
    playbackMode: Yup.string().required(),
})
    const YupVldSchOf_Miniplayer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Miniplayer>> = Yup.object({
        miniplayerRenderer: YupVldSchOf_MiniplayerRenderer,
    })
    const YupVldSchOf_OfflineabilityRendererFormat : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OfflineabilityRendererFormat>> = Yup.object({
        name: YupVldSchOf_Subtitle,
        formatType: Yup.string().required(),
    })

        const YupVldSchOf_OfflineabilityRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.OfflineabilityRenderer>> = Yup.object({
            offlineable: Yup.boolean().required(),
            formats: Yup.array().of(YupVldSchOf_OfflineabilityRendererFormat).required(),
            clickTrackingParams: Yup.string().required(),
        })

            const YupVldSchOf_Offlineability : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Offlineability>> = Yup.object({
                offlineabilityRenderer: YupVldSchOf_OfflineabilityRenderer,//XXX
            })
    
                const YupVldSchOf_PlayabilityStatus : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayabilityStatus>> = Yup.object({
                    status: Yup.string().required(),//XXX
                    playableInEmbed: Yup.boolean().required(),//XXX
                    offlineability: YupVldSchOf_Offlineability.notRequired().default(null).nullable(),//XXX
                    miniplayer: YupVldSchOf_Miniplayer,
                    contextParams: Yup.string().required(),
                })


const YupVldSchOf_ProjectionType = Yup.mixed<typeof ytInitialData.ProjectionType [keyof typeof ytInitialData.ProjectionType]>().oneOf(Object.values(ytInitialData.ProjectionType))

    const YupVldSchOf_StreamingDataFormat : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StreamingDataFormat>> = Yup.object({
        itag: Yup.number().required(),
        url: Yup.string().notRequired(),
        mimeType: Yup.string().required(),
        bitrate: Yup.number().required(),
        width: Yup.number().required(),
        height: Yup.number().required(),
        lastModified: Yup.string().required(),
        quality: Yup.string().required(),
        fps: Yup.number().required(),
        qualityLabel: Yup.string().required(),
        projectionType: YupVldSchOf_ProjectionType,
        audioQuality: Yup.string().required(),
        approxDurationMs: Yup.string().required(),
        audioSampleRate: Yup.string().required(),
        audioChannels: Yup.number().required(),
        signatureCipher: Yup.string().required(),
    })

const YupVldSchOf_ColorInfo : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ColorInfo>> = Yup.object({
    primaries: Yup.string().required(),
    transferCharacteristics: Yup.string().required(),
    matrixCoefficients: Yup.string().required(),
})

const YupVldSchOf_InitRangeOrIndexRange : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.InitRangeOrIndexRange>> = Yup.object({
    start: Yup.string().required(),
    end: Yup.string().required(),
})
    
    const YupVldSchOf_AdaptiveFormat : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdaptiveFormat>> = Yup.object({
        itag: Yup.number().required(),
        url: Yup.string().notRequired(),
        mimeType: Yup.string().required(),
        bitrate: Yup.number().required(),
        width: Yup.number().notRequired(),
        height: Yup.number().notRequired(),
        initRange: YupVldSchOf_InitRangeOrIndexRange,
        indexRange: YupVldSchOf_InitRangeOrIndexRange,
        lastModified: Yup.string().required(),
        contentLength: Yup.string().required(),
        quality: Yup.string().required(),
        fps: Yup.number().notRequired(),
        qualityLabel: Yup.string().notRequired(),
        projectionType: YupVldSchOf_ProjectionType,
        averageBitrate: Yup.number().required(),
        approxDurationMs: Yup.string().required(),
        signatureCipher: Yup.string().required(),
        colorInfo: YupVldSchOf_ColorInfo.notRequired().default(null).nullable(),
        highReplication: Yup.boolean().notRequired(),
        audioQuality: Yup.string().notRequired(),
        audioSampleRate: Yup.string().notRequired(),
        audioChannels: Yup.number().notRequired(),
        loudnessDb: Yup.number().notRequired(),
    })

        export const YupVldSchOf_StreamingData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StreamingData>> = Yup.object({
            expiresInSeconds: Yup.string().required(),
            formats: Yup.array().of(YupVldSchOf_StreamingDataFormat).required(),
            adaptiveFormats: Yup.array().of(YupVldSchOf_AdaptiveFormat).required(),
        })

const YupVldSchOf_PlayerAdParams : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerAdParams>> = Yup.object({
    showContentThumbnail: Yup.boolean().required(),
    enabledEngageTypes: Yup.string().required(),
})

const YupVldSchOf_GutParams : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.GutParams>> = Yup.object({
    tag: Yup.string().required()
})

    const YupVldSchOf_PlayerLegacyDesktopWatchAdsRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerLegacyDesktopWatchAdsRenderer>> = Yup.object({
        playerAdParams: YupVldSchOf_PlayerAdParams,
        gutParams: YupVldSchOf_GutParams,
        showCompanion: Yup.boolean().required(),
        showInstream: Yup.boolean().required(),
        useGut: Yup.boolean().required(),
    })      

        const YupVldSchOf_PlayerAdsEntity : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerAdsEntity>> = Yup.object({
            playerLegacyDesktopWatchAdsRenderer: YupVldSchOf_PlayerLegacyDesktopWatchAdsRenderer,
        })
    
           
            
const YupVldSchOf_AtrUrlOrYoutubeRemarketingUrlOrGoogleRemarketingUrl : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AtrUrlOrYoutubeRemarketingUrlOrGoogleRemarketingUrl>> = Yup.object({
    baseUrl: Yup.string().required(),
    elapsedMediaTimeSeconds: Yup.number().required(),
})

const YupVldSchOf_AtrURL : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AtrURL>> = Yup.object({
    baseUrl: Yup.string().required(),
    elapsedMediaTimeSeconds: Yup.number().required(),
})

const YupVldSchOf_AtrURLNotMedia : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AtrURLNotMedia>> = Yup.object({
    baseUrl: Yup.string().required(),
    offsetMilliseconds: Yup.number().required(),
})

const YupVldSchOf_URL : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.URL>> = Yup.object({
    baseUrl: Yup.string().required(),
})
    const YupVldSchOf_PlaybackTracking : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlaybackTracking>> = Yup.object({
        videostatsPlaybackUrl: YupVldSchOf_URL,
        videostatsDelayplayUrl: YupVldSchOf_URL,
        videostatsWatchtimeUrl: YupVldSchOf_URL,
        ptrackingUrl: YupVldSchOf_URL,
        qoeUrl: YupVldSchOf_URL,
        atrUrl: YupVldSchOf_AtrURL,
        videostatsScheduledFlushWalltimeSeconds: Yup.array().of(Yup.number()).notRequired().default(null).nullable(),
        videostatsDefaultFlushIntervalSeconds: Yup.number().required(),
        youtubeRemarketingUrl: YupVldSchOf_AtrURL.notRequired().default(null).nullable(),
        googleRemarketingUrl: YupVldSchOf_AtrURL.notRequired().default(null).nullable(),
      })
        



    const YupVldSchOf_CaptionTrack : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CaptionTrack>> = Yup.object({
        baseUrl: Yup.string().required(),
        name: YupVldSchOf_HeaderText,
        vssId: Yup.string().required(),
        languageCode: Yup.string().required(),
        kind: Yup.string().required(),
        isTranslatable: Yup.boolean().required(),
    })

    const YupVldSchOf_TranslationLanguage : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TranslationLanguage>> = Yup.object({
        languageCode: Yup.string().required(),
        languageName: YupVldSchOf_HeaderText,
    })

const YupVldSchOf_AudioTrack : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AudioTrack>> = Yup.object({
    captionTrackIndices: Yup.array().of(Yup.number()),
})
          
        const YupVldSchOf_PlayerCaptionsTracklistRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerCaptionsTracklistRenderer>> = Yup.object({
            captionTracks: Yup.array().of(YupVldSchOf_CaptionTrack).notRequired().default(null).nullable(),
            audioTracks: Yup.array().of(YupVldSchOf_AudioTrack).notRequired().default(null).nullable(),
            translationLanguages: Yup.array().of(YupVldSchOf_TranslationLanguage).notRequired().default(null).nullable(),
            defaultAudioTrackIndex: Yup.number().required(),
        })

            export const YupVldSchOf_Captions : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Captions>> = Yup.object({
                playerCaptionsTracklistRenderer: YupVldSchOf_PlayerCaptionsTracklistRenderer,
            })
        
            
const YupVldSchOf_AudioConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AudioConfig>> = Yup.object({
    loudnessDb: Yup.number().required(),
    perceptualLoudnessDb: Yup.number().required(),
    enablePerFormatLoudness: Yup.boolean().required(),
})

const YupVldSchOf_StreamSelectionConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StreamSelectionConfig>> = Yup.object({
    maxBitrate: Yup.string().required(),
})

const YupVldSchOf_DynamicReadaheadConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DynamicReadaheadConfig>> = Yup.object({
    maxReadAheadMediaTimeMs: Yup.number().required(),
    minReadAheadMediaTimeMs: Yup.number().required(),
    readAheadGrowthRateMs: Yup.number().required(),
})

    const YupVldSchOf_MediaCommonConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MediaCommonConfig>> = Yup.object({
        dynamicReadaheadConfig: YupVldSchOf_DynamicReadaheadConfig,
    })

const YupVldSchOf_WebPlayerShareEntityServiceEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WebPlayerShareEntityServiceEndpoint>> = Yup.object({
    serializedShareEntity: Yup.string().required(),
})
    const YupVldSchOf_GetSharePanelCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.GetSharePanelCommand>> = Yup.object({
        clickTrackingParams: Yup.string().required(),
        commandMetadata: YupVldSchOf_AddToWatchLaterCommandCommandMetadata,
        webPlayerShareEntityServiceEndpoint: YupVldSchOf_WebPlayerShareEntityServiceEndpoint,
    }) 

    const YupVldSchOf_UnsubscribeCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.UnsubscribeCommand>> = Yup.object({
        clickTrackingParams: Yup.string().required(),
        commandMetadata: YupVldSchOf_AddToWatchLaterCommandCommandMetadata,
        unsubscribeEndpoint: YupVldSchOf_SubscribeEndpoint,
    })

        const YupVldSchOf_WebPlayerActionsPorting : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WebPlayerActionsPorting>> = Yup.object({
            getSharePanelCommand: YupVldSchOf_GetSharePanelCommand,
            subscribeCommand: YupVldSchOf_SubscribeCommand,
            unsubscribeCommand: YupVldSchOf_UnsubscribeCommand,
            addToWatchLaterCommand: YupVldSchOf_AddToWatchLaterCommand,
            removeFromWatchLaterCommand: YupVldSchOf_RemoveFromWatchLaterCommand,
        })

            const YupVldSchOf_WebPlayerConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WebPlayerConfig>> = Yup.object({
                useCobaltTvosDash: Yup.boolean().required(),
                webPlayerActionsPorting: YupVldSchOf_WebPlayerActionsPorting,
            })
        

                export const YupVldSchOf_PlayerConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerConfig>> = Yup.object({
                    audioConfig: YupVldSchOf_AudioConfig,
                    streamSelectionConfig: YupVldSchOf_StreamSelectionConfig,
                    mediaCommonConfig: YupVldSchOf_MediaCommonConfig,
                    webPlayerConfig: YupVldSchOf_WebPlayerConfig,
                })
        

    const YupVldSchOf_ThumbnailOrWatermarkOrIconOrImage : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailOrWatermarkOrIconOrImage>> = Yup.object({
        thumbnails: Yup.array().of(YupVldSchOf_Thumbnail).notRequired().default(null).nullable() ,
    })

    const YupVldSchOf_FeaturedChannel : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FeaturedChannel>> = Yup.object({
        startTimeMs: Yup.string().required(),
        endTimeMs: Yup.string().required(),
        watermark: YupVldSchOf_ThumbnailOrWatermarkOrIconOrImage,
        trackingParams: Yup.string().required(),
        navigationEndpoint: YupVldSchOf_ChannelNavigationEndpointClass,
        channelName: Yup.string().required(),
        subscribeButton: YupVldSchOf_SubscribeButton,
    })
        const YupVldSchOf_PlayerAnnotationsExpandedRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerAnnotationsExpandedRenderer>> = Yup.object({
            featuredChannel: YupVldSchOf_FeaturedChannel,
            allowSwipeDismiss: Yup.boolean().required(),
            annotationId: Yup.string().required(),
        })

            export const YupVldSchOf_AnnotationsEntity : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AnnotationsEntity>> = Yup.object({
                playerAnnotationsExpandedRenderer: YupVldSchOf_PlayerAnnotationsExpandedRenderer,
            })
            
    
           
                            
const YupVldSchOf_PlayerStoryboardSpecRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerStoryboardSpecRenderer>> = Yup.object({
    spec: Yup.string().required(),
    recommendedLevel: Yup.number().required(),
})
    export const YupVldSchOf_Storyboards : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Storyboards>> = Yup.object({
        playerStoryboardSpecRenderer: YupVldSchOf_PlayerStoryboardSpecRenderer,
    })



const YupVldSchOf_MyDate  =Yup.string().matches("(^((19|[2-9][0-9])\\d\\d[-](((0[1-9]|1[012])[-](0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])[-](29|30|31))|((0[4,6,9]|11)[-](29|30))))$)|(^(19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)[-]02[-]29$)") 

const YupVldSchOf_Embed : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Embed>> = Yup.object({
    iframeUrl: Yup.string().required(),
    flashUrl: Yup.string().notRequired(),
    width: Yup.number().required(),
    height: Yup.number().required(),
    flashSecureUrl: Yup.string().notRequired(),
})         
const YupVldSchOf_AvaibleCountry = Yup.mixed<typeof ytInitialData.AvaibleCountry[keyof typeof ytInitialData.AvaibleCountry]>().oneOf(Object.values(ytInitialData.AvaibleCountry))     
    
    const YupVldSchOf_PlayerMicroformatRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerMicroformatRenderer>> = Yup.object({
        thumbnail: YupVldSchOf_BackgroundClass,
        embed: YupVldSchOf_Embed,
        title: YupVldSchOf_HeaderText,
        description: YupVldSchOf_HeaderText,
        lengthSeconds: Yup.string().required(),
        ownerProfileUrl: Yup.string().required(),
        externalChannelId: Yup.string().required(),
        isFamilySafe: Yup.boolean().required(),
        availableCountries: Yup.array().of(YupVldSchOf_AvaibleCountry).notRequired().default(null).nullable(),
        isUnlisted: Yup.boolean().required(),
        hasYpcMetadata: Yup.boolean().required(),
        viewCount: Yup.string().required(),
        category: Yup.string().required(),
        publishDate: YupVldSchOf_MyDate,
        ownerChannelName: Yup.string().required(),
        uploadDate: YupVldSchOf_MyDate,
    })    
                                

        export const YupVldSchOf_Microformat : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Microformat>> = Yup.object({
            playerMicroformatRenderer: YupVldSchOf_PlayerMicroformatRenderer,
        })
    
       
    const YupVldSchOf_SimpleCardTeaserRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SimpleCardTeaserRenderer>> = Yup.object({
        message: YupVldSchOf_HeaderText,
        trackingParams: Yup.string().required(),
        prominent: Yup.boolean().required(),
        logVisibilityUpdates: Yup.boolean().required(),
        onTapCommand: YupVldSchOf_OnTapCommandClass,
    })

        const YupVldSchOf_Teaser : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Teaser>> = Yup.object({
            simpleCardTeaserRenderer: YupVldSchOf_SimpleCardTeaserRenderer,
        })

const YupVldSchOf_CueRange : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CueRange>> = Yup.object({
    startCardActiveMs: Yup.string().required(),
    endCardActiveMs: Yup.string().required(),
    teaserDurationMs: Yup.string().required(),
    iconAfterTeaserMs: Yup.string().required(),
})

            const YupVldSchOf_CardRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CardRenderer>> = Yup.object({
                teaser: YupVldSchOf_Teaser,
                cueRanges: Yup.array().of(YupVldSchOf_CueRange).notRequired().default(null).nullable(),
                trackingParams: Yup.string().required(),
            })      

                const YupVldSchOf_Card : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Card>> = Yup.object({
                    cardRenderer: YupVldSchOf_CardRenderer,
                })  
                
const YupVldSchOf_VeData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VeData>> = Yup.object({
    trackingParams: Yup.string().required(),
})       
    const YupVldSchOf_CloseButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CloseButton>> = Yup.object({
        infoCardIconRenderer: YupVldSchOf_VeData,
    })

                    const YupVldSchOf_CardCollectionRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CardCollectionRenderer>> = Yup.object({
                        cards: Yup.array().of(YupVldSchOf_Card).notRequired().default(null).nullable(),
                        headerText: YupVldSchOf_HeaderText,
                        icon: YupVldSchOf_CloseButton,
                        closeButton: YupVldSchOf_CloseButton,
                        trackingParams: Yup.string().required(),
                        allowTeaserDismiss: Yup.boolean().required(),
                        logIconVisibilityUpdates: Yup.boolean().required(),
                    })
                
                        export const YupVldSchOf_Cards : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Cards>> = Yup.object({
                            cardCollectionRenderer: YupVldSchOf_CardCollectionRenderer,
                        })
                
            
const YupVldSchOf_SlotType= Yup.mixed<typeof ytInitialData.SlotType [keyof typeof ytInitialData.SlotType]>().oneOf(Object.values(ytInitialData.SlotType))  

const YupVldSchOf_AdSlotLoggingData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdSlotLoggingData>> = Yup.object({
    serializedSlotAdServingDataEntry : Yup.string().required() ,
})

const YupVldSchOf_SlotEventTriggerType = Yup.mixed<typeof ytInitialData.SlotEventTriggerType [keyof typeof ytInitialData.SlotEventTriggerType]>().oneOf(Object.values(ytInitialData.SlotEventTriggerType))  

    const YupVldSchOf_AdSlotMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdSlotMetadata>> = Yup.object({
        slotId : Yup.string().required() ,
        slotType : YupVldSchOf_SlotType ,
        adSlotLoggingData : YupVldSchOf_AdSlotLoggingData ,
        triggerEvent : YupVldSchOf_SlotEventTriggerType ,
    })


    const YupVldSchOf_SlotEntryTrigger : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SlotEntryTrigger>> = Yup.object({
        id : Yup.string().required() ,
        beforeContentVideoIdStartedTrigger : Yup.object ().notRequired() , // A FAIRE : '{})' is valid as this object  
    })

const YupVldSchOf_LayoutType = Yup.mixed<typeof ytInitialData.LayoutType [keyof typeof ytInitialData.LayoutType]>().oneOf(Object.values(ytInitialData.LayoutType))  


const YupVldSchOf_AdLayoutLoggingData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdLayoutLoggingData>> = Yup.object({
    serializedAdServingDataEntry : Yup.string().required() ,
})

        const YupVldSchOf_AdLayoutMetadata : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdLayoutMetadata>> = Yup.object({
            layoutId : Yup.string().required() ,
            layoutType : YupVldSchOf_LayoutType ,
            adLayoutLoggingData : YupVldSchOf_AdLayoutLoggingData ,
        })

        

const YupVldSchOf_SodarExtensionData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SodarExtensionData>> = Yup.object({
    siub : Yup.string().required() ,
    bgub : Yup.string().required() ,
    scs : Yup.string().required() ,
    bgp : Yup.string().required() ,
})

const YupVldSchOf_CsiParameterEntity : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CsiParameterEntity>> = Yup.object({
    key : Yup.string().required() ,
    value : Yup.string().required() ,
})

const YupVldSchOf_TrafficType = Yup.mixed<typeof ytInitialData.TrafficType [keyof typeof ytInitialData.TrafficType]>().oneOf(Object.values(ytInitialData.TrafficType))  
       

    const YupVldSchOf_ActiveViewTrackingEntity : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ActiveViewTrackingEntity>> = Yup.object({
        trafficType : YupVldSchOf_TrafficType ,
    })


        const YupVldSchOf_Pings : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Pings>> = Yup.object({
            impressionPings : Yup.array().of(YupVldSchOf_URL).required() ,
            errorPings : Yup.array().of(YupVldSchOf_URL).required() ,
            mutePings : Yup.array().of(YupVldSchOf_URL).required() ,
            unmutePings : Yup.array().of(YupVldSchOf_URL).required() ,
            pausePings : Yup.array().of(YupVldSchOf_URL).required() ,
            rewindPings : Yup.array().of(YupVldSchOf_URL).required() ,
            resumePings : Yup.array().of(YupVldSchOf_URL).required() ,
            skipPings : Yup.array().of(YupVldSchOf_URL).required() ,
            closePings : Yup.array().of(YupVldSchOf_URL).required() ,
            progressPings : Yup.array().of(YupVldSchOf_AtrURLNotMedia).required() ,
            fullscreenPings : Yup.array().of(YupVldSchOf_URL).required() ,
            activeViewViewablePings : Yup.array().of(YupVldSchOf_URL).required() ,
            endFullscreenPings : Yup.array().of(YupVldSchOf_URL).required() ,
            activeViewMeasurablePings : Yup.array().of(YupVldSchOf_URL).required() ,
            abandonPings : Yup.array().of(YupVldSchOf_URL).required() ,
            activeViewFullyViewableAudibleHalfDurationPings : Yup.array().of(YupVldSchOf_URL).required() ,
            completePings : Yup.array().of(YupVldSchOf_URL).required() ,
            activeViewTracking : YupVldSchOf_ActiveViewTrackingEntity ,
        })


        const YupVldSchOf_InstreamVideoAdRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.InstreamVideoAdRenderer>> = Yup.object({
            skipOffsetMilliseconds : Yup.number().required() ,
            pings : YupVldSchOf_Pings ,
            clickthroughEndpoint : YupVldSchOf_CunningCommand ,
            csiParameters : Yup.array().of(YupVldSchOf_CsiParameterEntity).required() ,
            playerVars : Yup.string().required() ,
            elementId : Yup.string().required() ,
            trackingParams : Yup.string().required() ,
            legacyInfoCardVastExtension : Yup.string().required() ,
            sodarExtensionData : YupVldSchOf_SodarExtensionData ,
            externalVideoId : Yup.string().required() ,
            adLayoutLoggingData : YupVldSchOf_AdLayoutLoggingData ,
            layoutId : Yup.string().required() ,
        })

            const YupVldSchOf_RenderingContent : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.RenderingContent>> = Yup.object({
                //playerBytesAdLayoutRenderer : YupVldSchOf_PlayerBytesAdLayoutRenderer ,
                instreamVideoAdRenderer : YupVldSchOf_InstreamVideoAdRenderer.default(null).nullable().notRequired() ,
            })


                const YupVldSchOf_PlayerBytesAdLayoutRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerBytesAdLayoutRenderer>> = Yup.object({
                    adLayoutMetadata : YupVldSchOf_AdLayoutMetadata ,
                    renderingContent : YupVldSchOf_RenderingContent ,
                })


                    const YupVldSchOf_SequentialLayoutEntity : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SequentialLayoutEntity>> = Yup.object({
                        playerBytesAdLayoutRenderer : YupVldSchOf_PlayerBytesAdLayoutRenderer ,
                    })

                        const YupVldSchOf_PlayerBytesSequentialLayoutRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerBytesSequentialLayoutRenderer>> = Yup.object({
                            sequentialLayouts : Yup.array().of(YupVldSchOf_SequentialLayoutEntity).required() ,
                        })

                                const YupVldSchOf_TopRenderingContent : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TopRenderingContent>> = Yup.object({
                                    playerBytesSequentialLayoutRenderer : YupVldSchOf_PlayerBytesSequentialLayoutRenderer ,
                                    instreamVideoAdRenderer : YupVldSchOf_InstreamVideoAdRenderer.default(null).nullable().notRequired() ,
                                })


const YupVldSchOf_RequestTriggeringLayoutId : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.RequestTriggeringLayoutId>> = Yup.object({
    triggeringLayoutId : Yup.string().required() ,
})
                                
    const YupVldSchOf_LayoutExitNormalTriggers : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.LayoutExitNormalTriggers>> = Yup.object({
        id : Yup.string().required() ,
        onLayoutSelfExitRequestedTrigger : YupVldSchOf_RequestTriggeringLayoutId ,
    })

                            
    const YupVldSchOf_LayoutExitSkipTriggers : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.LayoutExitSkipTriggers>> = Yup.object({
        id : Yup.string().required() ,
        skipRequestedTrigger : YupVldSchOf_RequestTriggeringLayoutId ,
    })

    const YupVldSchOf_LayoutExitMuteTriggers : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.LayoutExitMuteTriggers>> = Yup.object({
        id : Yup.string().required() ,
        skipRequestedTrigger : YupVldSchOf_RequestTriggeringLayoutId ,
    })

                                const YupVldSchOf_TopPlayerBytesAdLayoutRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TopPlayerBytesAdLayoutRenderer>> = Yup.object({
                                    adLayoutMetadata : YupVldSchOf_AdLayoutMetadata ,
                                    renderingContent : YupVldSchOf_TopRenderingContent ,
                                    layoutExitNormalTriggers : Yup.array().of(YupVldSchOf_LayoutExitNormalTriggers) ,
                                    layoutExitSkipTriggers : Yup.array().of(YupVldSchOf_LayoutExitSkipTriggers) ,
                                    layoutExitMuteTriggers : Yup.array().of(YupVldSchOf_LayoutExitMuteTriggers) ,
                                })


                                    const YupVldSchOf_FulfilledLayout : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FulfilledLayout>> = Yup.object({
                                        playerBytesAdLayoutRenderer : YupVldSchOf_TopPlayerBytesAdLayoutRenderer ,
                                    })
                                    
                                        const YupVldSchOf_FulfillmentContent : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FulfillmentContent>> = Yup.object({
                                            fulfilledLayout : YupVldSchOf_FulfilledLayout ,
                                        })


    const YupVldSchOf_SlotIdTrigger : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SlotIdTrigger>> = Yup.object({
        triggeringSlotId : Yup.string().required() ,
    })

        const YupVldSchOf_SlotExpirationTriggers : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SlotExpirationTriggers>> = Yup.object({
            id : Yup.string().required() ,
            //one of 
            slotIdExitedTrigger : YupVldSchOf_SlotIdTrigger.default(null).nullable().notRequired() , 
            onNewPlaybackAfterContentVideoIdTrigger : Yup.object ().notRequired() , // A FAIRE : '{})' is valid as this object
        })    
        
        const YupVldSchOf_SlotFulfillmentTriggers : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SlotFulfillmentTriggers>> = Yup.object({
            id : Yup.string().required(),
            slotIdEnteredTrigger : YupVldSchOf_SlotIdTrigger ,
        })

                                            const YupVldSchOf_AdSlotRender : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdSlotRender>> = Yup.object({
                                                adSlotMetadata : YupVldSchOf_AdSlotMetadata ,
                                                fulfillmentContent : YupVldSchOf_FulfillmentContent ,
                                                slotEntryTrigger : YupVldSchOf_SlotEntryTrigger ,
                                                slotFulfillmentTriggers : Yup.array().of(YupVldSchOf_SlotFulfillmentTriggers) ,
                                                slotExpirationTriggers : Yup.array().of(YupVldSchOf_SlotExpirationTriggers) ,
                                            })

                                                export const YupVldSchOf_AdSlotsEntity : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdSlotsEntity>> = Yup.object({
                                                    adSlotRenderer : YupVldSchOf_AdSlotRender , 
                                                })
                                            
            
                        
const YupVldSchOf_InterpreterSafeURL : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.InterpreterSafeURL>> = Yup.object({
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: Yup.string().required(),
})                 

      
    const YupVldSchOf_BotguardData : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.BotguardData>> = Yup.object({
        program: Yup.string().required(),
        interpreterSafeUrl: YupVldSchOf_InterpreterSafeURL,
        serverEnvironment: Yup.number().required(),
    })
        
        const YupVldSchOf_PlayerAttestationRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerAttestationRenderer>> = Yup.object({
            challenge: Yup.string().required(),
            botguardData: YupVldSchOf_BotguardData,
        })        

            export const YupVldSchOf_Attestation : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Attestation>> = Yup.object({
                playerAttestationRenderer: YupVldSchOf_PlayerAttestationRenderer,
            })
            
            
const YupVldSchOf_WebCommandMetadata2 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.WebCommandMetadata2>> = Yup.object({
    sendPost: Yup.boolean().required(),
    apiUrl: Yup.string().required(),
})    

    const YupVldSchOf_CommandMetadata2 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommandMetadata2>> = Yup.object({
        webCommandMetadata: YupVldSchOf_WebCommandMetadata2
    })
                
        const YupVldSchOf_CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand>> = Yup.object({
            clickTrackingParams: Yup.string().required(),
            commandMetadata: YupVldSchOf_CommandMetadata2,//AddToWatchLaterCommandCommandMetadata
            feedbackEndpoint: YupVldSchOf_FeedbackEndpoint,
        })           
                        
            const YupVldSchOf_MealbarPromoRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MealbarPromoRenderer>> = Yup.object({
                icon: YupVldSchOf_ThumbnailOrWatermarkOrIconOrImage,
                messageTexts:YupVldSchOf_Subtitle.notRequired(),
                actionButton: YupVldSchOf_ActionButton,
                dismissButton: YupVldSchOf_A11YSkipNavigationButtonButtonRenderer,
                triggerCondition: Yup.string().required(),
                style: Yup.string().required(),
                trackingParams: Yup.string().required(),
                impressionEndpoints:Yup.array().of(YupVldSchOf_CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand).notRequired().default(null).nullable(),
                isVisible: Yup.boolean().required(),
                messageTitle: YupVldSchOf_Subtitle,
            })

            const YupVldSchOf_PromoConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PromoConfig>> = Yup.object({
                promoId: Yup.string().required(),
                impressionEndpoints:Yup.array().of(YupVldSchOf_CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand).notRequired().default(null).nullable(),
                acceptCommand: YupVldSchOf_CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand,
                dismissCommand: YupVldSchOf_CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand,
            })

            const YupVldSchOf_CommandExecutorCommand1 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommandExecutorCommand1>> = Yup.object({
                commands: Yup.array().of(YupVldSchOf_CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand).notRequired().default(null).nullable(),
            })
    
                const YupVldSchOf_Command1 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Command1>> = Yup.object({
                    clickTrackingParams: Yup.string().required(),
                    commandExecutorCommand: YupVldSchOf_CommandExecutorCommand1,
                })

                const YupVldSchOf_ButtonRenderer4 : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ButtonRenderer4>> = Yup.object({
                    size: YupVldSchOf_SizeTypeEnum,
                    text: YupVldSchOf_Subtitle,
                    trackingParams: Yup.string().required(),
                    command: YupVldSchOf_Command1,
                })

                    const YupVldSchOf_DismissButton : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.DismissButton>> = Yup.object({
                        buttonRenderer: YupVldSchOf_ButtonRenderer4,
                    })

const YupVldSchOf_SuggestedPositionOrDismissStrategy : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SuggestedPositionOrDismissStrategy>> = Yup.object({
    type: Yup.string().required(),
})
        
                        const YupVldSchOf_TooltipRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TooltipRenderer>> = Yup.object({
                            promoConfig: YupVldSchOf_PromoConfig,
                            targetId: Yup.string().required(),
                            text: YupVldSchOf_Subtitle,
                            detailsText: YupVldSchOf_Subtitle,
                            dismissButton: YupVldSchOf_DismissButton,
                            suggestedPosition: YupVldSchOf_SuggestedPositionOrDismissStrategy,
                            dismissStrategy: YupVldSchOf_SuggestedPositionOrDismissStrategy,
                            dwellTimeMs: Yup.string().required(),
                            trackingParams: Yup.string().required()
                        })

                            const YupVldSchOf_MessagesEntity : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MessagesEntity>> = Yup.object({
                                mealbarPromoRenderer: YupVldSchOf_MealbarPromoRenderer.notRequired().default(null).nullable(), 
                                tooltipRenderer: YupVldSchOf_TooltipRenderer.notRequired().default(null).nullable(),
                            })
                
        

    const YupVldSchOf_TitleOrText : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TitleOrText>> = Yup.object({ // A FAIRE  
        accessibility: YupVldSchOf_DisabledAccessibilityData,
        simpleText: Yup.string().required(),
    })

const YupVldSchOf_BrowseEndpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.BrowseEndpoint>> = Yup.object({ 
    browseId:Yup.string().required(),
    canonicalBaseUrl: Yup.string().notRequired()
})

    const YupVldSchOf_Endpoint : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Endpoint>> = Yup.object({
        clickTrackingParams: Yup.string().required(),
        commandMetadata: YupVldSchOf_EndpointCommandMetadata,
        browseEndpoint: YupVldSchOf_BrowseEndpoint.notRequired().default(null).nullable(),
        watchEndpoint: YupVldSchOf_WatchEndpoint.notRequired().default(null).nullable(),
    })
        
           
        const YupVldSchOf_EndscreenElementRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EndscreenElementRenderer>> = Yup.object({
            style: Yup.string().required(),
            image: YupVldSchOf_ThumbnailOrWatermarkOrIconOrImage,
            icon: YupVldSchOf_ThumbnailOrWatermarkOrIconOrImage.notRequired().default(null).nullable(),
            left: Yup.number().required(),
            width: Yup.number().required(),
            top: Yup.number().required(),
            aspectRatio: Yup.number().required(),
            startMs: Yup.string().required(),
            endMs: Yup.string().required(),
            title: YupVldSchOf_TitleOrText,
            metadata: YupVldSchOf_HeaderTextOrNothing,
            callToAction: YupVldSchOf_HeaderText.notRequired().default(null).nullable() ,
            dismiss: YupVldSchOf_HeaderText.notRequired().default(null).nullable() ,
            endpoint: YupVldSchOf_Endpoint,
            hovercardButton: YupVldSchOf_SubscribeButton.notRequired().default(null).nullable() ,
            trackingParams: Yup.string().required(),
            isSubscribe: Yup.boolean().notRequired() ,
            id: Yup.string().required(),
            thumbnailOverlays: Yup.array().of(YupVldSchOf_PlayerOverlayAutoplayRendererThumbnailOverlay).notRequired().default(null).nullable() 
        })
                 

            const YupVldSchOf_ElementsEntity : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ElementsEntity>> = Yup.object({
                endscreenElementRenderer: YupVldSchOf_EndscreenElementRenderer
            })  
                            
                const YupVldSchOf_EndscreenRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.EndscreenRenderer>> = Yup.object({
                    elements: Yup.array().of(YupVldSchOf_ElementsEntity).notRequired().default(null).nullable() ,
                    startMs: Yup.string().required(),
                    trackingParams: Yup.string().required(),
                })                   
                            
                    
                export const YupVldSchOf_Endscreen : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Endscreen>> = Yup.object({
                    endscreenRenderer: YupVldSchOf_EndscreenRenderer,
                })
       






const YupVldSchOf_ConfigKind = Yup.mixed<typeof ytInitialData.ConfigKind [keyof typeof ytInitialData.ConfigKind]>().oneOf(Object.values(ytInitialData.ConfigKind))
     
const YupVldSchOf_AdTimeOffset : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdTimeOffset>> = Yup.object({
    offsetStartMilliseconds: Yup.string().required(),
    offsetEndMilliseconds: Yup.string().required(),
})
    const YupVldSchOf_AdPlacementConfig : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdPlacementConfig>> = Yup.object({
        kind: YupVldSchOf_ConfigKind, 
        adTimeOffset: YupVldSchOf_AdTimeOffset.notRequired().default(null).nullable(),
        hideCueRangeMarker: Yup.boolean().notRequired(),
    })

        const YupVldSchOf_Config : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Config>> = Yup.object({
            adPlacementConfig: YupVldSchOf_AdPlacementConfig
        })


  
 
    const YupVldSchOf_PlayerResponseFrameworkUpdates : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerResponseFrameworkUpdates>> = Yup.object({
        entityBatchUpdate: YupVldSchOf_EntityBatchUpdate,
    })

    const YupVldSchOf_PlayerResponseVideoDetails : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerResponseVideoDetails>> = Yup.object({
        videoId: Yup.string().required(),
        title: Yup.string().required(),
        lengthSeconds: Yup.string().required(),
        keywords: Yup.array().of(Yup.string()).notRequired().default(null).nullable(),
        channelId: Yup.string().required(),
        isOwnerViewing: Yup.boolean().required(),
        shortDescription: Yup.string().required(),
        isCrawlable: Yup.boolean().required(),
        thumbnail: YupVldSchOf_BackgroundClass,
        allowRatings: Yup.boolean().required(),
        viewCount: Yup.string().required(),
        author: Yup.string().required(),
        isPrivate: Yup.boolean().required(),
        isUnpluggedCorpus: Yup.boolean().required(),
        isLiveContent: Yup.boolean().required(),
    })

const YupVldSchOf_HeartbeatParams : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.HeartbeatParams>> = Yup.object({
    heartbeatToken: Yup.string().required(),
    intervalMilliseconds: Yup.string().required(),
    maxRetries: Yup.string().required(),
    drmSessionId: Yup.string().required(),
    softFailOnError: Yup.boolean().required(),
    heartbeatServerData: Yup.string().required(),
})


//--------------------------------------------------------------------

   
 


const YupVldSchOf_TemplatedAdTextReamining: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TemplatedAdTextReamining>> = Yup.object({
    text: Yup.string().required(), // A FAIRE: enum: "{TIME_REMAINING});" "{FORMATTED_AD_DURATION_REMAINING});"
    isTemplated: Yup.boolean().required(),
    trackingParams: Yup.string().required(),
});

    const YupVldSchOf_TemplatedCountdown: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TemplatedCountdown>> = Yup.object({
        templatedAdText: YupVldSchOf_TemplatedAdTextReamining,
    });


const YupVldSchOf_AdPreviewRendererThumbnail: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdPreviewRendererThumbnail>> = Yup.object({
    thumbnail: YupVldSchOf_BackgroundClass,
    trackingParams: Yup.string().required(),
});

    const YupVldSchOf_AdPreviewRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdPreviewRenderer>> = Yup.object({
        thumbnail: YupVldSchOf_AdPreviewRendererThumbnail,
        trackingParams: Yup.string().required(),
        durationMilliseconds: Yup.number().required(),
        templatedCountdown: YupVldSchOf_TemplatedCountdown,
    });

        const YupVldSchOf_PreskipRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PreskipRenderer>> = Yup.object({
            adPreviewRenderer: YupVldSchOf_AdPreviewRenderer,
        
        });



    const YupVldSchOf_ButtonRendererMessage: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ButtonRendererMessage>> = Yup.object({
        isTemplated: Yup.boolean().required(),
        trackingParams: Yup.string().required(),
    }).concat(ytInitialData.ButtonRendererMessageText.provider.get_createSchemaFromLang<ReturnType <typeof YtConfig.getLanguage>>(YtConfig.getLanguage(),"text"));//XXX;

        const YupVldSchOf_SkipButtonRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SkipButtonRenderer>> = Yup.object({
            message: YupVldSchOf_ButtonRendererMessage,
            trackingParams: Yup.string().required(),
        });

            const YupVldSchOf_SkippableRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SkippableRenderer>> = Yup.object({
                skipButtonRenderer: YupVldSchOf_SkipButtonRenderer,
            });
            

                const YupVldSchOf_SkipAdRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SkipAdRenderer>> = Yup.object({
                    preskipRenderer: YupVldSchOf_PreskipRenderer,
                    skippableRenderer: YupVldSchOf_SkippableRenderer,
                    trackingParams: Yup.string().required(),
                    skipOffsetMilliseconds: Yup.number().required(),
                });

                    const YupVldSchOf_SkipOrPreviewRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SkipOrPreviewRenderer>> = Yup.object({
                        skipAdRenderer: YupVldSchOf_SkipAdRenderer,
                    });
                                    

    const YupVldSchOf_NavigationEndpoint1: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.NavigationEndpoint1>> = Yup.object({
        clickTrackingParams: Yup.string().required(),
        commandMetadata: YupVldSchOf_EndpointCommandMetadata,
        urlEndpoint: YupVldSchOf_CommandURLEndpoint,
    });


        const YupVldSchOf_StickyButtonRenderer2: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyButtonRenderer2>> = Yup.object({ // A FAIRE merge with StickyButtonRenderer //serviceEndpoint: ServiceEndpointClass//XXX
            style: YupVldSchOf_ButtonRendererStyle,//XXX
            text: YupVldSchOf_HeaderText,//XXX
            icon: YupVldSchOf_Icon,//XXX
            trackingParams: Yup.string().required(),//XXX
            navigationEndpoint: YupVldSchOf_NavigationEndpoint1,
        });
                                            
                                        
            const YupVldSchOf_VisitAdvertiserRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.VisitAdvertiserRenderer>> = Yup.object({
                buttonRenderer: YupVldSchOf_StickyButtonRenderer2,
            });

        const YupVldSchOf_StickyButtonRenderer4: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyButtonRenderer4>> = Yup.object({
            text: YupVldSchOf_HeaderText,
            navigationEndpoint: YupVldSchOf_NavigationEndpoint1,
            trackingParams: Yup.string().required(),
        });

            const YupVldSchOf_ActionButtonRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ActionButtonRenderer>> = Yup.object({
                buttonRenderer: YupVldSchOf_StickyButtonRenderer4,
            });

        const YupVldSchOf_ThumbnailThumbnails: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ThumbnailThumbnails>> = Yup.object({
            thumbnails: Yup.array().of(YupVldSchOf_Thumbnail),
            trackingParams: Yup.string().required(),
        }); 


    const YupVldSchOf_AboutThisAdRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AboutThisAdRenderer>> = Yup.object({
        url: YupVldSchOf_InterpreterSafeURL,
        trackingParams: Yup.string().required(),
    });

        const YupVldSchOf_GoofyPopup: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.GoofyPopup>> = Yup.object({
            aboutThisAdRenderer: YupVldSchOf_AboutThisAdRenderer,
        });

            const YupVldSchOf_FabulousOpenPopupAction: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FabulousOpenPopupAction>> = Yup.object({
                popup: YupVldSchOf_GoofyPopup,
                popupType: YupVldSchOf_PopupType,
            });

                const YupVldSchOf_StunningAction: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StunningAction>> = Yup.object({
                    clickTrackingParams: Yup.string().required(),
                    openPopupAction: YupVldSchOf_FabulousOpenPopupAction,
                });

                    const YupVldSchOf_StickyButtonRenderer3: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyButtonRenderer3>> = Yup.object({
                        style: YupVldSchOf_ButtonRendererStyle,
                        size: YupVldSchOf_SizeTypeEnum,//XXX
                        isDisabled: Yup.boolean().required(),//XXX
                        //text: YupVldSchOf_Subtitle,//XXX 
                        //oneOf TODO : 
                        serviceEndpoint: YupVldSchOf_StunningAction.notRequired().default(null).nullable(),//XXX
                        navigationEndpoint : YupVldSchOf_StunningAction.notRequired().default(null).nullable(), 
                        icon: YupVldSchOf_Icon,//XXX
                        trackingParams: Yup.string().required(),//XXX
                        accessibilityData: YupVldSchOf_DisabledAccessibilityData,//XXX
                    });

                    const YupVldSchOf_StickyButton3: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.StickyButton3>> = Yup.object({
                        buttonRenderer : YupVldSchOf_StickyButtonRenderer3
                    })

                        const YupVldSchOf_AdHoverTextButtonRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdHoverTextButtonRenderer>> = Yup.object({
                            button: YupVldSchOf_StickyButton3,
                            hoverText: YupVldSchOf_HeaderText,
                            trackingParams: Yup.string().required(),
                        });
    
                            const YupVldSchOf_AdInfoRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdInfoRenderer>> = Yup.object({
                                adHoverTextButtonRenderer: YupVldSchOf_AdHoverTextButtonRenderer,
                            });

const YupVldSchOf_TemplatedAdText: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.TemplatedAdText>> = Yup.object({
    text: Yup.string().required(), // A FAIRE: enum:  Sponsorisé (1 sur 2)
    isTemplated: Yup.boolean().required(),
    trackingParams: Yup.string().required(),
});

const YupVldSchOf_Description: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.Description>> = Yup.object({
    text: Yup.string().required(),
    trackingParams: Yup.string().required(),
});


        const YupVldSchOf_SimpleAdBadgeRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SimpleAdBadgeRenderer>> = Yup.object({
            text: YupVldSchOf_TemplatedAdText,
            trackingParams: Yup.string().required(),
        });

            const YupVldSchOf_AdBadgeRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdBadgeRenderer>> = Yup.object({
                simpleAdBadgeRenderer: YupVldSchOf_SimpleAdBadgeRenderer,
            });

            
            const YupVldSchOf_FlyoutCtaRendererFlyoutCta: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FlyoutCtaRendererFlyoutCta>> = Yup.object({
                image: YupVldSchOf_ThumbnailThumbnails,
                headline: YupVldSchOf_TemplatedAdText,
                description: YupVldSchOf_Description,
                actionButton: YupVldSchOf_ActionButtonRenderer,
                startMs: Yup.number().required(),
                trackingParams: Yup.string().required(),
            });
            
                const YupVldSchOf_FlyoutCtaRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.FlyoutCtaRenderer>> = Yup.object({
                    flyoutCtaRenderer: YupVldSchOf_FlyoutCtaRendererFlyoutCta,
                });


    const YupVldSchOf_AdDurationRemainingRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdDurationRemainingRenderer>> = Yup.object({
        templatedCountdown: YupVldSchOf_TemplatedCountdown,
        trackingParams: Yup.string().required(),
    });
                
        const YupVldSchOf_AdDurationRemaining: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdDurationRemaining>> = Yup.object({
            adDurationRemainingRenderer: YupVldSchOf_AdDurationRemainingRenderer,
        });

                                const YupVldSchOf_InstreamAdPlayerOverlayRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.InstreamAdPlayerOverlayRenderer>> = Yup.object({
                                    skipOrPreviewRenderer: YupVldSchOf_SkipOrPreviewRenderer,
                                    trackingParams: Yup.string().required(),
                                    visitAdvertiserRenderer: YupVldSchOf_VisitAdvertiserRenderer,
                                    adBadgeRenderer: YupVldSchOf_AdBadgeRenderer,
                                    adDurationRemaining: YupVldSchOf_AdDurationRemaining,
                                    adInfoRenderer: YupVldSchOf_AdInfoRenderer,
                                    flyoutCtaRenderer: YupVldSchOf_FlyoutCtaRenderer,
                                    adLayoutLoggingData: YupVldSchOf_AdLayoutLoggingData,
                                    elementId: Yup.string().required(),
                                    inPlayerSlotId: Yup.string().required(),
                                    inPlayerLayoutId: Yup.string().required(),
                                });

                                    const YupVldSchOf_LinearAdPlayerOverlay: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.LinearAdPlayerOverlay>> = Yup.object({
                                        instreamAdPlayerOverlayRenderer: YupVldSchOf_InstreamAdPlayerOverlayRenderer,
                                    });

                                        const YupVldSchOf_LinearAdInstreamVideoAdRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.LinearAdInstreamVideoAdRenderer>> = Yup.object({
                                            playerOverlay: YupVldSchOf_LinearAdPlayerOverlay,
                                            trackingParams: Yup.string().required(),
                                            layoutId: Yup.string().required(),
                                            associatedPlayerBytesLayoutId: Yup.string().required(),
                                        });

                                            const YupVldSchOf_LinearAd: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.LinearAd>> = Yup.object({
                                                instreamVideoAdRenderer: YupVldSchOf_LinearAdInstreamVideoAdRenderer,
                                            });

                                                const YupVldSchOf_LinearAdSequenceRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.LinearAdSequenceRenderer>> = Yup.object({
                                                    linearAds: Yup.array().of(YupVldSchOf_LinearAd),
                                                });


const YupVldSchOf_AdBreakServiceRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdBreakServiceRenderer>> = Yup.object({
    prefetchMilliseconds: Yup.string().required(),
    getAdBreakUrl: Yup.string().required(),
})

const YupVldSchOf_BadgeStyle = Yup.mixed<typeof ytInitialData.BadgeStyle [keyof typeof ytInitialData.BadgeStyle]>().oneOf(Object.values(ytInitialData.BadgeStyle))

    const YupVldSchOf_MetadataBadgeRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.MetadataBadgeRenderer>> = Yup.object({
        style: YupVldSchOf_BadgeStyle,
        label: Yup.string().required(),
        trackingParams: Yup.string().required(),
    });

        const YupVldSchOf_AdBadge: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdBadge>> = Yup.object({
            metadataBadgeRenderer: YupVldSchOf_MetadataBadgeRenderer,
        });

                                const YupVldSchOf_ActionCompanionAdRenderer: Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.ActionCompanionAdRenderer>> = Yup.object({
                                    headline: YupVldSchOf_TemplatedAdText,
                                    description: YupVldSchOf_Description,
                                    actionButton: YupVldSchOf_ActionButtonRenderer,
                                    iconImage: YupVldSchOf_ThumbnailThumbnails,
                                    bannerImage: YupVldSchOf_ThumbnailThumbnails,
                                    navigationEndpoint: YupVldSchOf_NavigationEndpoint1,
                                    trackingParams: Yup.string().required(),
                                    adInfoRenderer: YupVldSchOf_AdInfoRenderer,
                                    adVideoId: Yup.string().required(),
                                    impressionPings: Yup.array().of(YupVldSchOf_URL),
                                    adLayoutLoggingData: YupVldSchOf_AdLayoutLoggingData,
                                    isContentVideoCompanion: Yup.boolean().notRequired(),
                                    associatedCompositePlayerBytesLayoutId: Yup.string().required(),
                                    adBadge: YupVldSchOf_AdBadge,
                                });
                                                
                                                    const YupVldSchOf_AdPlacementRendererRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdBreakServiceRendererRenderer>> = Yup.object({
                                                        adBreakServiceRenderer: YupVldSchOf_AdBreakServiceRenderer.notRequired().default(null).nullable(),
                                                        linearAdSequenceRenderer : YupVldSchOf_LinearAdSequenceRenderer.notRequired().default(null).nullable(),
                                                        actionCompanionAdRenderer : YupVldSchOf_ActionCompanionAdRenderer.notRequired().default(null).nullable(),
                                                    })
                                                        
                                                            const YupVldSchOf_AdPlacementRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdPlacementRenderer>> = Yup.object({
                                                                config: YupVldSchOf_Config,
                                                                renderer: YupVldSchOf_AdPlacementRendererRenderer,
                                                                adSlotLoggingData: YupVldSchOf_AdSlotLoggingData,
                                                            })
                                                
                                                                export const YupVldSchOf_AdPlacementsEntity : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.AdPlacementsEntity>> = Yup.object({
                                                                    adPlacementRenderer: YupVldSchOf_AdPlacementRenderer
                                                                })

                                                                    export const YupVldSchOf_PlayerResponse : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.PlayerResponse>> = Yup.object({
                                                                        responseContext: YupVldSchOf_PlayerResponseResponseContext,//XXX
                                                                        playabilityStatus: YupVldSchOf_PlayabilityStatus,//XXX
                                                                        streamingData: YupVldSchOf_StreamingData,
                                                                        playerAds: Yup.array().of(YupVldSchOf_PlayerAdsEntity).notRequired().default(null).nullable() ,
                                                                        heartbeatParams: YupVldSchOf_HeartbeatParams.notRequired().default(null).nullable(),
                                                                        playbackTracking: YupVldSchOf_PlaybackTracking,
                                                                        captions: YupVldSchOf_Captions.notRequired().default(null).nullable(),
                                                                        videoDetails: YupVldSchOf_PlayerResponseVideoDetails,
                                                                        annotations: Yup.array().of(YupVldSchOf_AnnotationsEntity).notRequired().default(null).nullable() ,
                                                                        playerConfig: YupVldSchOf_PlayerConfig,
                                                                        storyboards: YupVldSchOf_Storyboards,
                                                                        microformat: YupVldSchOf_Microformat,
                                                                        cards: YupVldSchOf_Cards,
                                                                        adSlots:Yup.array().of(YupVldSchOf_AdSlotsEntity) ,
                                                                        trackingParams: Yup.string().required(),
                                                                        attestation: YupVldSchOf_Attestation,
                                                                        messages: Yup.array().of(YupVldSchOf_MessagesEntity).notRequired().default(null).nullable() ,
                                                                        endscreen: YupVldSchOf_Endscreen,
                                                                        adPlacements: Yup.array().of(YupVldSchOf_AdPlacementsEntity).notRequired().default(null).nullable(),
                                                                        frameworkUpdates: YupVldSchOf_PlayerResponseFrameworkUpdates,
                                                                        adBreakHeartbeatParams : Yup.string().required(),
                                                                    })



//--------------------------------------------------------------------
 
  
    const YupVldSchOf_SortMenuSortFilterSubMenuRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SortMenuSortFilterSubMenuRenderer>> = Yup.object({
        subMenuItems: Yup.array().of(YupVldSchOf_SubMenuItem).required(),
        title: Yup.string().required(),
        icon: YupVldSchOf_Icon,
        accessibility: YupVldSchOf_DisabledAccessibilityData,
        tooltip: Yup.string().required(),
        trackingParams: Yup.string().required(),
    })

        const YupVldSchOf_SortMenu : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.SortMenu>> = Yup.object({
            sortFilterSubMenuRenderer: YupVldSchOf_SortMenuSortFilterSubMenuRenderer,
        })


//--------------------------------------------------------------------

    const YupVldSchOf_CommentSimpleboxRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CommentSimpleboxRenderer>> = Yup.object({
        submitButton: YupVldSchOf_A11YSkipNavigationButtonClass,
        cancelButton: YupVldSchOf_A11YSkipNavigationButtonClass,
        authorThumbnail: YupVldSchOf_Avatar,
        placeholderText: YupVldSchOf_Subtitle,
        trackingParams: Yup.string().required(),
        avatarSize: Yup.string().required(),
        emojiButton: YupVldSchOf_EmojiButton,
        emojiPicker: YupVldSchOf_EmojiPicker,
        aadcGuidelinesStateEntityKey: YupVldSchOf_AadcGuidelinesStateEntityKey,
    })

        const YupVldSchOf_CreateRenderer : Yup.ObjectSchema<makeOptionalIfNested_top<ytInitialData.CreateRenderer>> = Yup.object({
            commentSimpleboxRenderer: YupVldSchOf_CommentSimpleboxRenderer,
        })

  