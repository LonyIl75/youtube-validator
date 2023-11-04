
import {  CTraductionEnum} from "@/shared/traduction/typeLang.js";



export interface Response {
    responseContext: ResponseResponseContext;//XXX
    contents ?: Contents;//XXX
    currentVideoEndpoint?: CurrentVideoEndpointClass;//XXX
    trackingParams: string;//XXX
    playerOverlays?: PlayerOverlays;//XXX
    onResponseReceivedEndpoints?: OnResponseReceivedEndpoint[];//XXX
    engagementPanels?: EngagementPanel[];//XXX
    topbar?: Topbar;//XXX
    pageVisualEffects?: PageVisualEffect[];//XXX
    frameworkUpdates?: ResponseFrameworkUpdates;//XXX
  }
  
  
    export interface ResponseResponseContext {
        serviceTrackingParams ?: ServiceTrackingParam[];//XXX
        mainAppWebResponseContext ?: MainAppWebResponseContext;//XXX
        webResponseContextExtensionData: FluffyWebResponseContextExtensionData;//XXX
    }

        export interface ServiceTrackingParam {
            service: string;//XXX
            params: Param[];//XXX
        }
    

            export interface Param {
                key: string;//XXX
                value: string;//XXX
            }
  
        export interface MainAppWebResponseContext {
            datasyncId?: string;//XXX
            loggedOut: boolean;//XXX
            trackingParam: string;//XXX
        }
    
        export interface FluffyWebResponseContextExtensionData {
            ytConfigData?: YtConfigData;//XXX
            webPrefetchData?: WebPrefetchData;
            hasDecorated: boolean;
        }
        
            export interface YtConfigData {
                visitorData: string;//XXX
                sessionIndex: number;//XXX
                rootVisualElementType: number;//XXX
            }
        
            export interface WebPrefetchData {
                navigationEndpoints: NavigationEndpoint[];//XXX
            }
        
                export interface NavigationEndpoint {
                    clickTrackingParams: string;//XXX
                    commandMetadata: EndpointCommandMetadata;//XXX
                    watchEndpoint: AutoplayVideoWatchEndpoint;//XXX
                }

                    export interface EndpointCommandMetadata {
                        webCommandMetadata: PurpleWebCommandMetadata;//XXX
                    }
                        export interface PurpleWebCommandMetadata {
                            url: string;//XXX
                            webPageType: WebPageType;//XXX
                            rootVe: number;//XXX
                            apiUrl?: APIURL;//OOO
                        }
                        
                            //WEB_PAGE_TYPE_(?!CHANNEL|WATCH|UNKNOW|SHORTS|SEARCH|BROWSE) is empty 
                            export enum WebPageType {
                                WebPageTypeBrowse = "WEB_PAGE_TYPE_BROWSE",
                                WebPageTypeChannel = "WEB_PAGE_TYPE_CHANNEL",//XXX
                                WebPageTypeSearch = "WEB_PAGE_TYPE_SEARCH",
                                WebPageTypeUnknown = "WEB_PAGE_TYPE_UNKNOWN",//XXX
                                WebPageTypeWatch = "WEB_PAGE_TYPE_WATCH",//XXX
                                WebPageTypeShorts = "WEB_PAGE_TYPE_SHORTS", //ADD-XXX
                            }
                            
                            //rootVe":\d+,"apiUrl":"(?!/youtubei/v1/browse) is empty 
                            export enum APIURL {
                                YoutubeiV1Browse = "/youtubei/v1/browse",//XXX
                            }
                            ///youtubei/v1/feedback TODO : regex 
                            
    
                    export interface AutoplayVideoWatchEndpoint {
                        videoId: string;//XXX
                        params: string;//XXX
                        playerParams: string;//XXX
                        watchEndpointSupportedPrefetchConfig: WatchEndpointSupportedPrefetchConfig;//XXX
                    }
                
                        export interface WatchEndpointSupportedPrefetchConfig {
                            prefetchHintConfig: PrefetchHintConfig;//XXX
                        }

                            export interface PrefetchHintConfig {
                                prefetchPriority: number;//XXX
                                countdownUiRelativeSecondsPrefetchCondition: number;//XXX
                            }
                    
    
    export interface Contents {
        twoColumnWatchNextResults: TwoColumnWatchNextResults;//XXX
    }
    
        export interface TwoColumnWatchNextResults {
            results: TwoColumnWatchNextResultsResults;//XXX
            secondaryResults: TwoColumnWatchNextResultsSecondaryResults;//XXX
            autoplay: TwoColumnWatchNextResultsAutoplay;//XXX
        }

            export interface TwoColumnWatchNextResultsResults {
                results: ResultsResults;//XXX
            }
            
                export interface ResultsResults {
                    contents: ResultsContent[];//XXX
                    trackingParams: string;//XXX
                }
                
                export interface ResultsContent {
                    videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer;//XXX
                    videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer;
                    itemSectionRenderer?: PurpleItemSectionRenderer;//XXX
                }

                    export interface VideoPrimaryInfoRenderer {
                        title: Subtitle;//XXX
                        viewCount: ViewCount;//XXX
                        videoActions: VideoActions;//XXX
                        trackingParams: string;//XXX
                        dateText: HeaderText;//XXX
                        relativeDateText: ShortViewCountText;//XXX
                    }
                        export interface Subtitle {
                            runs: SubtitleRun[];//XXX
                        }
                        
                            export interface SubtitleRun {
                                text: string;//XXX
                            }
            
                        export interface ViewCount {
                            videoViewCountRenderer: VideoViewCountRenderer;//XXX
                        }
                  
                            export interface VideoViewCountRenderer {
                                viewCount: HeaderText;//XXX
                                shortViewCount: HeaderText;//XXX
                            }

                                export interface HeaderText {
                                    simpleText: string;//XXX
                                }
                                export interface HeaderTextOrNothing{
                                    simpleText?: string;//XXX
                                }
                  
                        export interface VideoActions {
                            menuRenderer: VideoActionsMenuRenderer;//XXX
                        }
                    
                            export interface VideoActionsMenuRenderer {
                                items: PurpleItem[];//XXX
                                trackingParams: string;//XXX
                                topLevelButtons: TopLevelButtonElement[];//XXX
                                accessibility: DisabledAccessibilityData;//XXX
                                flexibleItems: FlexibleItem[];//XXX
                            }
                            
                                export interface PurpleItem {
                                    menuServiceItemRenderer: Renderer;//XXX
                                }
                            
                                    export interface Renderer {
                                        text: Subtitle;//XXX
                                        icon: Icon;//XXX
                                        serviceEndpoint?: FluffyServiceEndpoint;//XXX
                                        trackingParams: string;//XXX
                                        iconPosition?: string;//XXX
                                    }
                  
                                        export interface FluffyServiceEndpoint {
                                            clickTrackingParams: string;//XXX
                                            commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                            getReportFormEndpoint?: GetTranscriptEndpointClass;//XXX 1
                                            signalServiceEndpoint?: PurpleSignalServiceEndpoint;//XXX 2 ; 1 XOR 2 ? 
                                        }

                                            export interface AddToWatchLaterCommandCommandMetadata {
                                                webCommandMetadata: FluffyWebCommandMetadata;//XXX
                                            }
                                            
                                                export interface FluffyWebCommandMetadata {
                                                    sendPost: boolean;//XXX
                                                    apiUrl?: string;//XXX
                                                }

                                            export interface GetTranscriptEndpointClass {
                                                params: string;//XXX
                                            }
                                          
                
                                            export interface PurpleSignalServiceEndpoint {
                                                signal: SignalEnum;//XXX
                                                actions: StickyAction[];//XXX
                                            }

                                                export enum SignalEnum {
                                                    ClientSignal = "CLIENT_SIGNAL",
                                                }
                  
                                                export interface StickyAction {
                                                    clickTrackingParams: string;//XXX
                                                    showEngagementPanelEndpoint: ShowEngagementPanelEndpoint;//XXX
                                                }
                                                
                                                    export interface ShowEngagementPanelEndpoint {
                                                        panelIdentifier: string;//XXX
                                                    }
                  

                  
                                export interface TopLevelButtonElement {
                                    segmentedLikeDislikeButtonRenderer?: SegmentedLikeDislikeButtonRenderer;//XXX
                                    buttonRenderer?: StickyButtonRenderer;  //XXX
                                }
                  
                  
                                    export interface SegmentedLikeDislikeButtonRenderer {
                                        likeButton: SegmentedLikeDislikeButtonRendererLikeButton;//XXX
                                        dislikeButton: DislikeButton; //XXX
                                        likeCount: string;//XXX
                                    }

                                        export interface SegmentedLikeDislikeButtonRendererLikeButton {
                                            toggleButtonRenderer: TentacledToggleButtonRenderer;//XXX
                                        }
                                        
                                            export interface TentacledToggleButtonRenderer {
                                                style: StyleClass;//XXX
                                                isToggled: boolean;//XXX
                                                isDisabled: boolean;//XXX
                                                defaultIcon: Icon;//XXX
                                                defaultText: ShortViewCountText;//XXX
                                                defaultServiceEndpoint: FluffyDefaultServiceEndpoint;//XXX
                                                toggledText: ShortViewCountText;//XXX
                                                toggledServiceEndpoint: ToggledServiceEndpoint;//XXX
                                                accessibility: Accessibility;//XXX
                                                trackingParams: string;//XXX
                                                defaultTooltip: string;//XXX
                                                toggledTooltip: ToggleButtonRendererToggledTooltip.enum_type;//XXX
                                                toggledStyle: StyleClass;//XXX
                                                accessibilityData: DisabledAccessibilityData;//XXX
                                                toggleButtonSupportedData: ToggleButtonSupportedData;//XXX
                                                targetId: string;//XXX //? "watch-like"
                                            }
                                      
                                                export interface StyleClass {
                                                    styleType: StyleType;//XXX
                                                }
                                      
                                                    export enum StyleType {
                                                        StyleDefaultActive = "STYLE_DEFAULT_ACTIVE",
                                                        StyleText = "STYLE_TEXT",
                                                        StyleDefault ="STYLE_DEFAULT"
                                                    }
                                                
                                                
                                                export interface Icon {
                                                    iconType: IconType;//XXX
                                                }
                                                    export enum IconType {
                                                        OPEN_IN_NEW="OPEN_IN_NEW",
                                                        INFO_OUTLINE="INFO_OUTLINE"
                                                    }

                                                export interface ShortViewCountText {
                                                    accessibility: DisabledAccessibilityData;//XXX
                                                    simpleText: string;//XXX
                                                }

                                                    export interface DisabledAccessibilityData {
                                                        accessibilityData: Accessibility;//XXX
                                                    }
                                                    
                                                        export interface Accessibility {
                                                            label: string;//XXX
                                                        }

                                                export interface FluffyDefaultServiceEndpoint {
                                                    clickTrackingParams: string;//XXX
                                                    commandExecutorCommand: TentacledCommandExecutorCommand;//XXX
                                                }
                                                          
                                                    export interface TentacledCommandExecutorCommand {
                                                        commands: IndigoCommand[];//XXX
                                                    }
                                                          
                                                        export interface IndigoCommand {
                                                            clickTrackingParams: string;//XXX
                                                            updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand;//XXX
                                                            commandMetadata?: AddToWatchLaterCommandCommandMetadata;//XXX
                                                            likeEndpoint?: FluffyLikeEndpoint;//XXX
                                                        }
                    
                                                            export interface UpdateToggleButtonStateCommand {
                                                                toggled: boolean;//XXX
                                                                buttonId: string;//XXX
                                                            }
                                                          
                                                            export interface FluffyLikeEndpoint {
                                                                status: Status;//XXX
                                                                target: WatchEndpoint;//XXX
                                                                likeParams: string;//XXX
                                                            }

                                                                export enum Status {
                                                                    Dislike = "DISLIKE",
                                                                    Indifferent = "INDIFFERENT",
                                                                    Like = "LIKE",
                                                                }

                                                export interface ToggledServiceEndpoint {
                                                    clickTrackingParams: string;//XXX
                                                    commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                                    likeEndpoint: ToggledServiceEndpointLikeEndpoint;//XXX
                                                }
                                                                                      
                                                    export interface ToggledServiceEndpointLikeEndpoint {
                                                        status: Status;//XXX
                                                        target: WatchEndpoint;//XXX
                                                        removeLikeParams: string;//XXX
                                                    }

                                                export namespace ToggleButtonRendererToggledTooltip {
                                                    export enum enum_type {
                                                        IDislikeThis = "IDislikeThis",//Je n'aime pas ce contenu //I dislike this
                                                        Unlike = "Unlike",//Je n'aime plus //Unlike
                                                    }

                                                    
                                                    export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                        
                                                    const  arr_regex_field = [] as const 
                                                    
                                                    const arr_regex_values = [] as const 


                                                    const fr_trad_arr = ["Je n'aime pas ce contenu","Je n'aime plus"] as const 
                                                    const jap_trad_arr = [ "低評価を取り消す","高評価を取り消し"] as const 
                                                    const en_trad_arr = [ "I dislike this","Unlike"] as const 

                                                    const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
            
                                                    export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)
                                                    


                                                }

                                                
                                                //export type t_trad_toggleButtonRendererToggledToolti = createTraductionFromEnumAndArr <ToggleButtonRendererToggledTooltip,[typeof en_trad_arr,typeof fr_trad_arr ,typeof jap_trad_arr],t_arr_yt_lang>



                                                export interface ToggleButtonSupportedData {
                                                    toggleButtonIdData: ToggleButtonIDData;//XXX
                                                }
                                                  
                                                    export interface ToggleButtonIDData {
                                                        id: string;//XXX
                                                    }
                                      
                                      
                                    

                  
                                        export interface DislikeButton {
                                            toggleButtonRenderer: FluffyToggleButtonRenderer;//XXX
                                        }
                                        
                                            export interface FluffyToggleButtonRenderer {
                                                style: StyleClass;//XXX
                                                isToggled: boolean;//XXX
                                                isDisabled: boolean;//XXX
                                                defaultIcon: Icon;//XXX
                                                defaultServiceEndpoint: PurpleDefaultServiceEndpoint;//XXX
                                                toggledServiceEndpoint: ToggledServiceEndpoint;//XXX
                                                accessibility: Accessibility;//XXX
                                                trackingParams: string;//XXX
                                                defaultTooltip: string;//XXX
                                                toggledTooltip: string;//XXX
                                                toggledStyle: StyleClass;//XXX
                                                accessibilityData: DisabledAccessibilityData;//XXX
                                                toggleButtonSupportedData: ToggleButtonSupportedData;//XXX
                                                targetId: string;//XXX // ? "watch-dislike"
                                            }
                  
                                                export interface PurpleDefaultServiceEndpoint {
                                                    clickTrackingParams: string;//XXX
                                                    commandExecutorCommand: FluffyCommandExecutorCommand;//XXX
                                                }
                  
                                                    export interface FluffyCommandExecutorCommand {
                                                        commands: StickyCommand[];//XXX
                                                    }
                                                    
                                                        export interface StickyCommand {
                                                            clickTrackingParams: string;//XXX
                                                            updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand;//XXX 1
                                                            commandMetadata?: AddToWatchLaterCommandCommandMetadata;//XXX 2 // 1 XOR 2 ?
                                                            likeEndpoint?: PurpleLikeEndpoint;//XXX
                                                        }

                                                            export interface PurpleLikeEndpoint {
                                                                status: Status;//XXX
                                                                target: WatchEndpoint;//XXX
                                                                dislikeParams: string;//XXX
                                                            }

                                                                export interface WatchEndpoint {
                                                                    videoId: string;//XXX
                                                                }
                                      
                                    export interface StickyButtonRenderer {
                                        style: ButtonRendererStyle;//XXX
                                        size: SizeTypeEnum;//XXX
                                        isDisabled: boolean;//XXX
                                        text: Subtitle;//XXX
                                        serviceEndpoint: ServiceEndpointClass;//XXX
                                        icon: Icon;//XXX
                                        tooltip: string;//XXX
                                        trackingParams: string;//XXX
                                        accessibilityData: DisabledAccessibilityData;//XXX
                                    }

                                        export enum ButtonRendererStyle {
                                            StyleUnknown = "STYLE_UNKNOWN",
                                            StyleBlueText = "STYLE_BLUE_TEXT",//XXX
                                            StyleDefault = "STYLE_DEFAULT",//XXX
                                            StylePrimary = "STYLE_PRIMARY",//XXX
                                            StyleText = "STYLE_TEXT",//XXX
                                            StyleSuggestive="STYLE_SUGGESTIVE",//Add-XXX
                                            StyleOpacity = "STYLE_OPACITY",//Add-XXX
                                            StyleInactiveOutline = "STYLE_INACTIVE_OUTLINE"//Add-XXX

                                        }

                                        //"style":"[^"]+","size":"SIZE_(?!DEFAULT) empty 
                                        export enum SizeTypeEnum {
                                            SizeDefault = "SIZE_DEFAULT",//XXX
                                        }
                                    
                                        export interface ServiceEndpointClass {
                                            clickTrackingParams: string;//XXX
                                            commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                            shareEntityServiceEndpoint: ShareEntityServiceEndpoint;//XXX
                                        }
                                    
                                            export interface ShareEntityServiceEndpoint {
                                                serializedShareEntity: string;//XXX
                                                commands: ShareEntityServiceEndpointCommand[];//XXX
                                            }
                                    
                                                export interface ShareEntityServiceEndpointCommand {
                                                    clickTrackingParams: string;//XXX
                                                    openPopupAction: PurpleOpenPopupAction;//XXX
                                                }
                                    
                                                    export interface PurpleOpenPopupAction {
                                                        popup: FluffyPopup;//XXX
                                                        popupType: PopupType;//XXX
                                                        beReused: boolean;
                                                    }
                                    
                                                        export interface FluffyPopup {
                                                            unifiedSharePanelRenderer: UnifiedSharePanelRenderer;//XXX
                                                        }
                                    
                                                            export interface UnifiedSharePanelRenderer {
                                                                trackingParams: string;//XXX
                                                                showLoadingSpinner: boolean;//XXX
                                                            }

                                                        export enum PopupType {
                                                            Dialog = "DIALOG",//XXX
                                                            Dropdown = "DROPDOWN",//Add-XXX
                                                            Toast = "TOAST",//Add-XXX
                                                            TopAlignedDialog = "TOP_ALIGNED_DIALOG"//Add-XXX
                                                        }

                                export interface FlexibleItem {
                                    menuFlexibleItemRenderer: MenuFlexibleItemRenderer;//XXX
                                }
                                                          
                                    export interface MenuFlexibleItemRenderer {
                                        menuItem: MenuItem;//XXX
                                        topLevelButton: MenuFlexibleItemRendererTopLevelButton;//XXX
                                    }
                                                            
                                        export interface MenuItem {
                                            menuServiceItemDownloadRenderer?: MenuItemMenuServiceItemDownloadRenderer;//XXX 1
                                            menuServiceItemRenderer?: MenuItemMenuServiceItemRenderer;//XXX 2 ; 1 XOR 2 ?
                                        }
                                                          
                                            export interface MenuItemMenuServiceItemDownloadRenderer {
                                                serviceEndpoint: TentacledServiceEndpoint;//XXX
                                                trackingParams: string;//XXX
                                            }
                                                                    
                                                export interface TentacledServiceEndpoint {
                                                    clickTrackingParams: string;//XXX
                                                    offlineVideoEndpoint: PurpleOfflineVideoEndpoint;//XXX
                                                }
                                                          
                                                    export interface PurpleOfflineVideoEndpoint {
                                                        videoId: string;//XXX
                                                        onAddCommand: PurpleOnAddCommand;//XXX
                                                    }
                                                                                
                                                        export interface PurpleOnAddCommand {
                                                            clickTrackingParams: string;//XXX
                                                            getDownloadActionCommand: PurpleGetDownloadActionCommand;//XXX
                                                        }
                                                                                
                                                            export interface PurpleGetDownloadActionCommand {
                                                                videoId: string;//XXX
                                                                params: string;//XXX
                                                                offlineabilityEntityKey: string;//XXX
                                                            }
                                                                                    
                                            export interface MenuItemMenuServiceItemRenderer {
                                                text: Subtitle;//XXX
                                                icon: Icon;//XXX
                                                serviceEndpoint: CommandClass;//XXX
                                                trackingParams: string;//XXX
                                                isDisabled?: boolean;
                                            }
                                                            
                                                export interface CommandClass {
                                                    clickTrackingParams: string;//XXX
                                                    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;//XXX 1
                                                    commandMetadata?: AddToWatchLaterCommandCommandMetadata;//XXX 2
                                                    addToPlaylistServiceEndpoint?: WatchEndpoint;//XXX 2 ; 1 XOR 2 ?
                                                }
                                                            
                                                    export interface ChangeEngagementPanelVisibilityAction {
                                                        targetId: string;//XXX
                                                        visibility: VisibilityEnum;//XXX
                                                    }
                                                                                
                                                        export enum VisibilityEnum {
                                                            EngagementPanelVisibilityExpanded = "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED",//XXX
                                                            EngagementPanelVisibilityHidden = "ENGAGEMENT_PANEL_VISIBILITY_HIDDEN",//XXX
                                                        }
                                                                                

                                                                    export interface MenuFlexibleItemRendererTopLevelButton {
                                                                        downloadButtonRenderer?: DownloadButtonRenderer;//XXX
                                                                        buttonRenderer?: TentacledButtonRenderer;//XXX
                                                                    }
                                                                    
                                                                        export interface DownloadButtonRenderer {
                                                                            trackingParams: string;//XXX
                                                                            style: ButtonRendererStyle;//XXX
                                                                            size: SizeTypeEnum;//XXX
                                                                            targetId: string;//XXX
                                                                            command: DownloadButtonRendererCommand;//XXX
                                                                        }
                                                                        
                                                                            export interface DownloadButtonRendererCommand {
                                                                                clickTrackingParams: string;//XXX
                                                                                offlineVideoEndpoint: CommandOfflineVideoEndpoint;//XXX
                                                                            }
                                                                            
                                                                                export interface CommandOfflineVideoEndpoint {
                                                                                    videoId: string;//XXX
                                                                                    onAddCommand: PurpleOnAddCommand;//XXX
                                                                                    //action: string;//Del-OOO
                                                                                }
                                                            
                                                            
                                                                        export interface TentacledButtonRenderer {
                                                                            style: ButtonRendererStyle;//XXX
                                                                            size: SizeTypeEnum;//XXX
                                                                            isDisabled: boolean;//XXX
                                                                            text: Subtitle;//XXX
                                                                            icon: Icon;//XXX
                                                                            accessibility?: Accessibility;//XXX
                                                                            tooltip: string;//XXX
                                                                            trackingParams: string;//XXX
                                                                            accessibilityData: DisabledAccessibilityData;//XXX
                                                                            targetId?: string;
                                                                            command: CommandClass;//XXX
                                                                        }


                    export interface VideoSecondaryInfoRenderer {
                        owner: Owner;//XXX
                        subscribeButton: SubscribeButton;//XXX
                        metadataRowContainer: MetadataRowContainer;//XXX
                        showMoreText: HeaderText;//XXX
                        showLessText: HeaderText;//XXX
                        trackingParams: string;//XXX
                        defaultExpanded: boolean;//XXX
                        descriptionCollapsedLines: number;//XXX
                        showMoreCommand: ShowMoreCommand;//XXX
                        showLessCommand: OnTapCommandClass;//XXX
                        attributedDescription: AttributedDescription;//XXX
                    }
                        export interface Owner {
                            videoOwnerRenderer: VideoOwnerRenderer;//XXX
                        }
                        
                            export interface VideoOwnerRenderer {
                                thumbnail: BackgroundClass;//XXX
                                title: Byline;//XXX
                                subscriptionButton: SubscriptionButton;//XXX
                                navigationEndpoint: ChannelNavigationEndpointClass;//XXX
                                subscriberCountText: ShortViewCountText;//XXX
                                trackingParams: string;//XXX
                                badges: OwnerBadgeElement[];//XXX
                            }
                        
                                export interface BackgroundClass {
                                    thumbnails: Thumbnail[];//XXX
                                }
                                
                                export interface Byline {
                                    runs: BylineRun[];//XXX
                                }
                        
                                    export interface BylineRun {
                                        text: string;//XXX
                                        navigationEndpoint: ChannelNavigationEndpointClass;//XXX
                                    }
                        
                                        export interface ChannelNavigationEndpointClass {
                                            clickTrackingParams: string;//XXX
                                            commandMetadata: EndpointCommandMetadata;//XXX
                                            browseEndpoint: NavigationEndpointBrowseEndpoint;//XXX
                                        }
                        
                                            export interface NavigationEndpointBrowseEndpoint {
                                                browseId: string;//XXX
                                                canonicalBaseUrl: string;//XXX
                                            }
                                    
                                export interface SubscriptionButton {
                                    type: string;//XXX
                                }
                        
                        
                                export interface OwnerBadgeElement {
                                    metadataBadgeRenderer: OwnerBadgeMetadataBadgeRenderer;//XXX
                                }
                        
                                    export interface OwnerBadgeMetadataBadgeRenderer {
                                        icon: Icon;//XXX
                                        style: string;//XXX
                                        tooltip: string;//XXX
                                        trackingParams: string;//XXX
                                        accessibilityData: Accessibility;//XXX
                                    }
                                    
                        export interface SubscribeButton {
                            subscribeButtonRenderer: SubscribeButtonRenderer;//XXX
                        }
                                      
                            export interface SubscribeButtonRenderer {
                                buttonText: Subtitle;//XXX
                                subscribed: boolean;//XXX
                                enabled: boolean;//XXX
                                type: string;//XXX
                                channelId: string;//XXX
                                showPreferences: boolean;//XXX
                                subscribedButtonText: Subtitle;//XXX
                                unsubscribedButtonText: Subtitle;//XXX
                                trackingParams: string;//XXX
                                unsubscribeButtonText: Subtitle;//XXX
                                subscribeAccessibility: DisabledAccessibilityData;//XXX
                                unsubscribeAccessibility: DisabledAccessibilityData;//XXX
                                notificationPreferenceButton: NotificationPreferenceButton;//XXX
                                targetId?: string;//XXX Add-XXX notRequired
                                subscribedEntityKey?: string;//XXX Add-XXX notRequired
                                onSubscribeEndpoints: SubscribeCommand[];//XXX
                                onUnsubscribeEndpoints: OnUnsubscribeEndpoint[];//XXX
                            }
                                      
                                export interface NotificationPreferenceButton {
                                    subscriptionNotificationToggleButtonRenderer: SubscriptionNotificationToggleButtonRenderer;//XXX
                                }  
                                
                                    export interface SubscriptionNotificationToggleButtonRenderer {
                                        states: State[];//XXX
                                        currentStateId: number;//XXX
                                        trackingParams: string;//XXX
                                        command: SubscriptionNotificationToggleButtonRendererCommand;//XXX
                                        targetId: string;//XXX
                                        secondaryIcon: Icon;//XXX
                                    }
                                    
                                        export interface State {
                                            stateId: number;//XXX
                                            nextStateId: number;//XXX
                                            state: VoiceSearchButton;//XXX
                                        }

                                            export interface VoiceSearchButton {
                                                buttonRenderer: VoiceSearchButtonButtonRenderer;//XXX
                                            }
                                            
                                                export interface VoiceSearchButtonButtonRenderer {
                                                    style?: ButtonRendererStyle;//XXX
                                                    size?: SizeTypeEnum;//XXX
                                                    isDisabled?: boolean;//XXX
                                                    icon?: Icon;//XXX 1
                                                    accessibility?: Accessibility;//XXX 1
                                                    trackingParams: string;//XXX
                                                    accessibilityData: DisabledAccessibilityData;//XXX
                                                    targetId?: string;//XXX 2
                                                    command?: HilariousCommand;//XXX 2
                                                    text?: HeaderText;
                                                    navigationEndpoint?: CurrentVideoEndpointClass;
                                                    serviceEndpoint?: IndigoServiceEndpoint;//XXX
                                                    tooltip?: string;//XXX
                                                }
                                            
                                                    export interface HilariousCommand {
                                                        clickTrackingParams: string;//XXX
                                                        openPopupAction?: OnClickCommandOpenPopupAction;//XXX
                                                        commandExecutorCommand?: IndigoCommandExecutorCommand;
                                                        changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
                                                        commandMetadata?: AddToWatchLaterCommandCommandMetadata;
                                                        getSurveyCommand?: GetSurveyCommand;
                                                    }
                                                        
                                                        export interface IndigoCommandExecutorCommand {
                                                            commands: AmbitiousCommand[];
                                                        }
                                                        
                                                            export interface AmbitiousCommand {
                                                                clickTrackingParams: string;
                                                                changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
                                                                updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand;
                                                            }
                                                    
                                                        export interface GetSurveyCommand {
                                                            endpoint: GetSurveyCommandEndpoint;
                                                            action: string;
                                                        }
                                                        
                                                            export interface GetSurveyCommandEndpoint {
                                                                watch: AdsEngagementPanelContentRenderer;
                                                            }
                                                                export interface AdsEngagementPanelContentRenderer {
                                                                    hack: boolean;//XXX
                                                                }
                                                            
                                                    export interface CurrentVideoEndpointClass {
                                                        clickTrackingParams: string;//XXX
                                                        commandMetadata: EndpointCommandMetadata;//XXX
                                                        watchEndpoint: CurrentVideoEndpointWatchEndpoint;//XXX
                                                    }
                                                                
                                                        export interface CurrentVideoEndpointWatchEndpoint {
                                                            videoId: string;//XXX
                                                            watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;//XXX
                                                        }
                                                                
                                                            export interface WatchEndpointSupportedOnesieConfig {
                                                                html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig;//XXX
                                                            }
                                                                                
                                                                export interface Html5PlaybackOnesieConfig {
                                                                    commonConfig: CommonConfig;//XXX
                                                                }
                                                                
                                                                    export interface CommonConfig {
                                                                        url: string;//XXX
                                                                    }
                                            
                                            
                                                    export interface IndigoServiceEndpoint {
                                                        clickTrackingParams: string;//XXX
                                                        commandMetadata: OnUnsubscribeEndpointCommandMetadata;//XXX
                                                        signalServiceEndpoint: FluffySignalServiceEndpoint;//XXX
                                                    }
                                            
                                                        export interface FluffySignalServiceEndpoint {
                                                            signal: SignalEnum;//XXX
                                                            actions: IndecentAction[];//XXX
                                                        }
                                            
                                                            export interface IndecentAction {
                                                                clickTrackingParams: string;//XXX
                                                                openPopupAction: StickyOpenPopupAction;//XXX
                                                            }
                                            
                                                                export interface StickyOpenPopupAction {
                                                                    popup: IndigoPopup;//XXX
                                                                    popupType: PopupType;//XXX
                                                                }
                                            
                                                                    export interface IndigoPopup {
                                                                        voiceSearchDialogRenderer: VoiceSearchDialogRenderer;//XXX
                                                                    }
                                            
                                                                        
                                                                        export interface VoiceSearchDialogRenderer {
                                                                            placeholderHeader: Subtitle;//XXX
                                                                            promptHeader: Subtitle;//XXX
                                                                            exampleQuery1: Subtitle;//XXX
                                                                            exampleQuery2: Subtitle;//XXX
                                                                            promptMicrophoneLabel: Subtitle;//XXX
                                                                            loadingHeader: Subtitle;//XXX
                                                                            connectionErrorHeader: Subtitle;//XXX
                                                                            connectionErrorMicrophoneLabel: Subtitle;//XXX
                                                                            permissionsHeader: Subtitle;//XXX
                                                                            permissionsSubtext: Subtitle;//XXX
                                                                            disabledHeader: Subtitle;//XXX
                                                                            disabledSubtext: Subtitle;//XXX
                                                                            microphoneButtonAriaLabel: Subtitle;//XXX
                                                                            exitButton: VoiceSearchButton;//XXX
                                                                            trackingParams: string;//XXX
                                                                            microphoneOffPromptHeader: Subtitle;//XXX
                                                                        }

                                        export interface SubscriptionNotificationToggleButtonRendererCommand {
                                            clickTrackingParams: string;//XXX
                                            commandExecutorCommand: StickyCommandExecutorCommand;//XXX
                                        }
                                        
                                            export interface StickyCommandExecutorCommand {
                                                commands: IndecentCommand[];//XXX
                                            }
                                            
                                                export interface IndecentCommand {
                                                    clickTrackingParams: string;//XXX
                                                    openPopupAction: FluffyOpenPopupAction;//XXX
                                                }
                                                
                                                    export interface FluffyOpenPopupAction {
                                                        popup: TentacledPopup;//XXX
                                                        popupType: PopupType;//XXX
                                                    }
                                                    
                                                        export interface TentacledPopup {
                                                            menuPopupRenderer: MenuPopupRenderer;//XXX
                                                        }
                                        
                                                            export interface MenuPopupRenderer {
                                                                items: MenuPopupRendererItem[];//XXX
                                                            }
                                                            
                                                                export interface MenuPopupRendererItem {
                                                                    menuServiceItemRenderer: PurpleMenuServiceItemRenderer;//XXX
                                                                }
                                                                
                                                                    export interface PurpleMenuServiceItemRenderer {
                                                                        text: Title;//XXX
                                                                        icon: Icon;//XXX
                                                                        serviceEndpoint: StickyServiceEndpoint;//XXX
                                                                        trackingParams: string;//XXX
                                                                        isSelected?: boolean;//XXX
                                                                    }
                                                                      
                                                                        export interface Title {
                                                                            simpleText?: TitleSimpleText.enum_type;//XXX
                                                                            runs?: SubtitleRun[];//XXX
                                                                        }

                                                                        export namespace TitleSimpleText {

                                                                            export enum enum_type {
                                                                                All = "All", //"Aucune" 
                                                                                None = "None", //"Personnalisées"
                                                                                Personalized = "Personalized", //"Vidéos mises en ligne récemment"
                                                                                RecentlyUploaded = "RecentlyUploaded",//"Toutes" //"Tout"
                                                                                ShowLess = "ShowLess",//"simpleText":"Plus"
                                                                                ShowMore = "ShowMore",//"simpleText":"Moins" //"Vidéos similaires"
                                                                            }


                                                                            export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                        
                                                                            const  arr_regex_field = [] as const 
                                                                            
                                                                            const arr_regex_values = [] as const 

                                                                            const fr_trad_arr = ["Tout","Aucune","Personnalisées" ,"Vidéos mises en ligne récemment","Moins","Plus"] as const 
                                                                            const jap_trad_arr = [ "すべて","なし" ,"カスタマイズされた通知のみ","元に戻す","概要","詳細"] as const 
                                                                            const en_trad_arr = [ "All","None" ,"Personalized","Recently uploaded","Show less","Show more"] as const 

                                                                            const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
            
                                                                            export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)
                                                                            
                                                                        }
                                                                            //export type t_trad_titleSimpleText = createTraductionFromEnumAndArr <TitleSimpleText,[typeof en_trad_arr,typeof fr_trad_arr ,typeof jap_trad_arr],t_arr_yt_lang>


                 
                                                                           

                                                                            
                                                                    
                                                                        export interface StickyServiceEndpoint {
                                                                            clickTrackingParams: string;//XXX
                                                                            commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                                                            modifyChannelNotificationPreferenceEndpoint?: GetTranscriptEndpointClass;//XXX 1
                                                                            signalServiceEndpoint?: OnUnsubscribeEndpointSignalServiceEndpoint;//XXX 2 ; 1 XOR 2 ?
                                                                        }
                                                                        
                                                                            export interface OnUnsubscribeEndpointSignalServiceEndpoint {
                                                                                signal: SignalEnum;//XXX
                                                                                actions: IndigoAction[];//XXX
                                                                            }
                                        
                                        
                                                                                export interface IndigoAction {
                                                                                    clickTrackingParams: string;//XXX
                                                                                    openPopupAction: TentacledOpenPopupAction;//XXX
                                                                                }
                                        
                                                                                    export interface TentacledOpenPopupAction {
                                                                                        popup: StickyPopup;//XXX
                                                                                        popupType: PopupType;//XXX
                                                                                    }
                                                                                        
                                                                                        export interface StickyPopup {
                                                                                            confirmDialogRenderer: FluffyConfirmDialogRenderer;//XXX
                                                                                        }
                                        
                                                                                            export interface FluffyConfirmDialogRenderer {
                                                                                                trackingParams: string;//XXX
                                                                                                dialogMessages: Subtitle[];//XXX
                                                                                                confirmButton: A11YSkipNavigationButtonClass;//XXX
                                                                                                cancelButton: A11YSkipNavigationButtonClass;//XXX
                                                                                                primaryIsCancel: boolean;//XXX
                                                                                            }

                                                                                            
                                                                                                export interface A11YSkipNavigationButtonClass {
                                                                                                    buttonRenderer: A11YSkipNavigationButtonButtonRenderer;//XXX
                                                                                                }
                                                                                                
                                                                                                    export interface A11YSkipNavigationButtonButtonRenderer {
                                                                                                        style: ButtonRendererStyle;//XXX
                                                                                                        size: SizeTypeEnum;//XXX
                                                                                                        isDisabled?: boolean;//XXX
                                                                                                        text?: Subtitle;//XXX
                                                                                                        serviceEndpoint?: PurpleServiceEndpoint;//XXX
                                                                                                        accessibility?: Accessibility;//XXX
                                                                                                        trackingParams: string;//XXX
                                                                                                        navigationEndpoint?: ButtonRendererNavigationEndpoint;
                                                                                                        accessibilityData?: DisabledAccessibilityData;
                                                                                                        command?: PurpleCommand;
                                                                                                        icon?: Icon;
                                                                                                    }

                                                                                                        
                                                                                                        export interface PurpleServiceEndpoint {
                                                                                                            clickTrackingParams: string;//XXX
                                                                                                            commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                                                                                            createCommentReplyEndpoint?: CreateCommentReplyEndpoint;
                                                                                                            createCommentEndpoint?: CreateCommentEndpoint;
                                                                                                            unsubscribeEndpoint?: SubscribeEndpoint;//XXX
                                                                                                        }

                                                                                                        
                                                                                                            export interface CreateCommentReplyEndpoint {
                                                                                                                createReplyParams: string;
                                                                                                            }

                                                                                                            export interface CreateCommentEndpoint {
                                                                                                                createCommentParams: string;
                                                                                                            }
                                                                                                          
                                                                                                            export interface SubscribeEndpoint {
                                                                                                                channelIds: string[];//XXX
                                                                                                                params: string;//XXX
                                                                                                            }
                                                                                                            

                                                                                                        export interface ButtonRendererNavigationEndpoint {
                                                                                                            clickTrackingParams: string;
                                                                                                            commandMetadata: PurpleCommandMetadata;
                                                                                                            createCommentReplyDialogEndpoint: CreateCommentReplyDialogEndpoint;
                                                                                                        }
                                                                                                        
                                                                                                            export interface PurpleCommandMetadata {
                                                                                                                webCommandMetadata: TentacledWebCommandMetadata;
                                                                                                            }
                                                                                                                
                                                                                                                export interface TentacledWebCommandMetadata {
                                                                                                                    ignoreNavigation: boolean;
                                                                                                                }
                                                                                                                            
                                                                                                            export interface CreateCommentReplyDialogEndpoint {
                                                                                                                dialog: Dialog;
                                                                                                            }
                                                                                                                
                                                                                                                export interface Dialog {
                                                                                                                    commentReplyDialogRenderer: CommentReplyDialogRenderer;
                                                                                                                }
                                                                                                                    
                                                                                                                    export interface CommentReplyDialogRenderer {
                                                                                                                        replyButton: A11YSkipNavigationButtonClass;
                                                                                                                        cancelButton: CancelButton;
                                                                                                                        authorThumbnail: Avatar;
                                                                                                                        placeholderText: Subtitle;
                                                                                                                        errorMessage: Subtitle;
                                                                                                                        emojiButton: EmojiButton;
                                                                                                                        emojiPicker: EmojiPicker;
                                                                                                                        aadcGuidelinesStateEntityKey: AadcGuidelinesStateEntityKey;
                                                                                                                    }
                                                                                                                        
                                                                                                                        export interface CancelButton {
                                                                                                                                buttonRenderer: FluffyButtonRenderer;
                                                                                                                        }
                                                                                                                                
                                                                                                                            export interface FluffyButtonRenderer {
                                                                                                                                text: Subtitle;
                                                                                                                                trackingParams: string;
                                                                                                                            }

                                                                                                                                                                                                                                                
                                                                                                                        export interface EmojiButton {
                                                                                                                            buttonRenderer: EmojiButtonButtonRenderer;
                                                                                                                        }

                                                                                                                            export interface EmojiButtonButtonRenderer {
                                                                                                                                size: PurpleSize;
                                                                                                                                icon: Icon;
                                                                                                                                trackingParams: string;
                                                                                                                                accessibilityData: DisabledAccessibilityData;
                                                                                                                            }
                                                                                                                            
                                                                                                                                export enum PurpleSize {
                                                                                                                                    SizeSmall = "SIZE_SMALL",
                                                                                                                                }
                                                                                                                          
                                                                                                                        export interface EmojiPicker {
                                                                                                                            emojiPickerRenderer: EmojiPickerRenderer;
                                                                                                                          }
                                                                                                                          
                                                                                                                            export interface EmojiPickerRenderer {
                                                                                                                                id: ID;
                                                                                                                                categories: Category[];
                                                                                                                                categoryButtons: CategoryButton[];
                                                                                                                                searchPlaceholderText: Subtitle;
                                                                                                                                searchNoResultsText: Subtitle;
                                                                                                                                pickSkinToneText: Subtitle;
                                                                                                                                trackingParams: string;
                                                                                                                                clearSearchLabel: ClearSearchLabel.enum_type;
                                                                                                                                skinToneGenericLabel: SkinToneGenericLabel.enum_type;
                                                                                                                                skinToneLightLabel: SkinToneLightLabel.enum_type;
                                                                                                                                skinToneMediumLightLabel: SkinToneMediumLightLabel.enum_type;
                                                                                                                                skinToneMediumLabel: SkinToneMediumLabel.enum_type;
                                                                                                                                skinToneMediumDarkLabel: SkinToneMediumDarkLabel.enum_type;
                                                                                                                                skinToneDarkLabel: SkinToneDarkLabel.enum_type;
                                                                                                                            }
                                                                                                                        
                                                                                                                                export enum ID {
                                                                                                                                    Emoji = "emoji",
                                                                                                                                }
                                                                                                                        
                                                                                                                                export interface Category {
                                                                                                                                    emojiPickerCategoryRenderer: EmojiPickerCategoryRenderer;
                                                                                                                                  }
                                                                                                                                  
                                                                                                                                    export interface EmojiPickerCategoryRenderer {
                                                                                                                                        categoryId: CategoryID;
                                                                                                                                        title: HeaderText;
                                                                                                                                        emojiIds: string[];
                                                                                                                                        trackingParams: string;
                                                                                                                                        categoryType: CategoryType;
                                                                                                                                        imageLoadingLazy?: boolean;
                                                                                                                                    }
                                                                                                                                  
                                                                                                                                  
                                                                                                                                        export enum CategoryID {
                                                                                                                                            Activities = "activities",
                                                                                                                                            Food = "food",
                                                                                                                                            Nature = "nature",
                                                                                                                                            Objects = "objects",
                                                                                                                                            People = "people",
                                                                                                                                            Symbols = "symbols",
                                                                                                                                            Travel = "travel",
                                                                                                                                            UC4R8DWoMoI7CAwX8LjQHIG = "UC4R8DWoMoI7CAwX8_LjQHig",
                                                                                                                                            UCkszU2WH9Gy1Mb0DV11UJg = "UCkszU2WH9gy1mb0dV-11UJg",
                                                                                                                                        }
                                                                                                                                  
                                                                                                                                  
                                                                                                                                        export enum CategoryType {
                                                                                                                                            CategoryTypeGlobal = "CATEGORY_TYPE_GLOBAL",
                                                                                                                                            CategoryTypeSeasonal = "CATEGORY_TYPE_SEASONAL",
                                                                                                                                            CategoryTypeUnicode = "CATEGORY_TYPE_UNICODE",
                                                                                                                                        }
                                                                                                                        
                                                                                                                                          
                                                                                                                                export interface CategoryButton {
                                                                                                                                    emojiPickerCategoryButtonRenderer: EmojiPickerCategoryButtonRenderer;
                                                                                                                                }
                                                                                                                                
                                                                                                                                    export interface EmojiPickerCategoryButtonRenderer {
                                                                                                                                        categoryId: CategoryID;
                                                                                                                                        icon: Icon;
                                                                                                                                        tooltip: Tooltip.enum_type;
                                                                                                                                        accessibility: DisabledAccessibilityData;
                                                                                                                                        targetId?: TargetID;
                                                                                                                                    }
                                                                                                                                       
                                                                                                                                    

                                                                                                                                              
                                                                                                                                    export namespace Tooltip{

                                                                                                                                        export enum enum_type {
                                                                                                                                            //YouTube = "YouTube",//Manifestez votre soutien avec un Super Thanks
                                                                                                                                            Objects = "Objects",//Objects //direct translation : Item
                                                                                                                                            Activities = "Activities", //Activities
                                                                                                                                            Pride = "Pride", //Pride
                                                                                                                                            People = "People", //People
                                                                                                                                            Travel = "Travel", //Travel
                                                                                                                                            Nature = "Nature",//Nature
                                                                                                                                            Symbols = "Symbols",//Symbols
                                                                                                                                            Food = "Food", //Food
                                                                                                                                            Member="Member",//Member //（1 年)= （1 year) //? (1 月) = (1 month)
                                                                                                                                            CustomEmojis="CustomEmojis", //Custom emojis
                                                                                                                                            Verified="Verified",//Verified 
                                                                                                                                            Owner="Owner",//Owner
                                                                                                                                            

                                                                                                                                        }

                                                                                                                                        
                                                                                                                                        export const def_lang = ["en","fr","jap"] as const 

                                                                                                                                        const  arr_regex_field = [enum_type.Member ] as const 
                                                                                                                                        
                                                                                                                                        const arr_regex_values = [[["\\(","\\d{1,2}(,\\d)?"],["\\)"]]] as const 

                                                                                                                                
                                                                                                                                       //export type t_notRegexFields = Exclude<typeof enum_type[keyof typeof enum_type],typeof arr_regex_field [number]>
                                                                            
                                                                                                                                        const fr_trad_arr  = ["Objet","Activitées","Promotion" ,"Personne","Voyage","Nature","Symboles","Nourriture",["Membre",["années?","mois"]],"Emoji personnaliser","Verifié","Propriétaire"] as const 
                                                                                                                                        const jap_trad_arr  = [ "アイテム","アクティビティ" ,"プライド","人","旅行","自然", "記号","食べ物",["メンバー",["年","月"]],"カスタム絵文字","確認済み","所有者"] as const 
                                                                                                                                        const en_trad_arr  =[ "Objects","Activities" ,"Pride","People","Travel","Nature","Symbols","Food",["Member",["years?","months?"]],"Custom emojis","Verified","Owner"] as const 
                                                                                                                                        
                                                                                                                                        //TODO : only one language at time , we dont need to generate traduction for all t_arr_yt_lang just for t_arr_yt_lang[idx]
                                                                                                                                        const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                                                                        
                                                                                                                                        export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)
                                                                                                                                        
                                                                                                                                        
                                                                                                                                        
                                                                                                                                    }

                                                                                                                                        export enum TargetID {
                                                                                                                                            EmojiPickerCategoryButtonPeople = "emoji-picker-category-button-people",
                                                                                                                                        }
                                                                                                                        
                                                                                                                        
                                                                                                                                export namespace ClearSearchLabel{
                                                                                                                                    export enum enum_type {
                                                                                                                                        ClearSearch = "ClearSearch",
                                                                                                                                    }

                                                                                                                                    
                                                                                                                                    export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                
                                                                                                                                    const  arr_regex_field = [] as const 
                                                                                                                                    
                                                                                                                                    const arr_regex_values = [] as const 

                                                                                                                                    const fr_trad_arr = ["Effacer l'historique des recherches"] as const 
                                                                                                                                    const jap_trad_arr = [ "検索をクリア"] as const 
                                                                                                                                    const en_trad_arr = [ "Clear search"] as const 

                                                                                                                                    const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                                                                    
                                                                                                                                    export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)
                                                                                                                                    
                                                                                                                                }
                                                                                                                                         
                                                                                                                                export namespace SkinToneGenericLabel{
                                                                                                                                    export enum enum_type {
                                                                                                                                        SkinToneGeneric = "SkinToneGeneric",
                                                                                                                                    }

                                                                                                                                    export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                
                                                                                                                                    const  arr_regex_field = [] as const 
                                                                                                                                    
                                                                                                                                    const arr_regex_values = [] as const 

                                                                                                                                    const fr_trad_arr = ["Couleur de peau générique"] as const 
                                                                                                                                    const jap_trad_arr = [ "汎用的な肌の色"] as const 
                                                                                                                                    const en_trad_arr = [ "Generic skin tone"] as const 

                                                                                                                                    const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                                                                    
                                                                                                                                    export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)

                                                                                                                                }
                                                                                                                                export namespace SkinToneLightLabel{
                                                                                                                                    export enum enum_type {
                                                                                                                                        SkinToneLight = "SkinToneLight",
                                                                                                                                    }

                                                                                                                                    export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                
                                                                                                                                    const  arr_regex_field = [] as const 
                                                                                                                                    
                                                                                                                                    const arr_regex_values = [] as const 

                                                                                                                                    const fr_trad_arr = ["Couleur de peau claire"] as const 
                                                                                                                                    const jap_trad_arr = [ "明るい肌の色"] as const 
                                                                                                                                    const en_trad_arr = [ "Light skin tone"] as const 

                                                                                                                                    const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                                                                    
                                                                                                                                    export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)

                                                                                                                                }
                                                                                                                            
                                                                                                                                export namespace SkinToneMediumLightLabel{
                                                                                                                                    export enum enum_type {
                                                                                                                                        SkinToneMediumLight = "SkinToneMediumLight",
                                                                                                                                    }


                                                                                                                                    export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                    
                                                                                                                                    const  arr_regex_field = [] as const 
                                                                                                                                    
                                                                                                                                    const arr_regex_values = [] as const 

                                                                                                                                    const fr_trad_arr = ["Couleur de peau moyennement claire"] as const 
                                                                                                                                    const jap_trad_arr = [ "やや明るい肌の色"] as const 
                                                                                                                                    const en_trad_arr = [ "Medium light skin tone"] as const 

                                                                                                                                    const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                                                                    
                                                                                                                                    export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)

                                                                                                                                }
                                                                                                                                export namespace SkinToneMediumLabel{
                                                                                                                                    export enum enum_type {
                                                                                                                                        SkinToneMedium = "SkinToneMedium",
                                                                                                                                    }

                                                                                                                                    export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                    
                                                                                                                                    const  arr_regex_field = [] as const 
                                                                                                                                    
                                                                                                                                    const arr_regex_values = [] as const 

                                                                                                                                    const fr_trad_arr = ["Couleur de peau intermédiaire"] as const 
                                                                                                                                    const jap_trad_arr = [ "中間的な明るさの肌の色"] as const 
                                                                                                                                    const en_trad_arr = [ "Medium skin tone"] as const 

                                                                                                                                    const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                                                                    
                                                                                                                                    export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)

                                                                                                                                }
                                                                                                                                
                                                                                                                                export namespace SkinToneMediumDarkLabel{
                                                                                                                                    export enum enum_type {
                                                                                                                                        SkinToneMediumDark = "SkinToneMediumDark",
                                                                                                                                    }

                                                                                                                                    export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                    
                                                                                                                                    const  arr_regex_field = [] as const 
                                                                                                                                    
                                                                                                                                    const arr_regex_values = [] as const 

                                                                                                                                    const fr_trad_arr = ["Couleur de peau moyennement sombre"] as const 
                                                                                                                                    const jap_trad_arr = [ "やや濃い肌の色"] as const 
                                                                                                                                    const en_trad_arr = [ "Medium dark skin tone"] as const 

                                                                                                                                    const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                                                                    
                                                                                                                                    export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)

                                                                                                                                }
                                                                                                                                
                                                                                                                                export namespace SkinToneDarkLabel{

                                                                                                                                    export enum enum_type {
                                                                                                                                        SkinToneDark = "SkinToneDark",
                                                                                                                                    }  
                                                                                                                                
                                                                                                                                    export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                        
                                                                                                                                    const  arr_regex_field = [] as const 
                                                                                                                                    
                                                                                                                                    const arr_regex_values = [] as const 

                                                                                                                                    const fr_trad_arr = ["Couleur de peau sombre"] as const 
                                                                                                                                    const jap_trad_arr = [ "濃い肌の色"] as const 
                                                                                                                                    const en_trad_arr = [ "Dark skin tone"] as const 

                                                                                                                                    const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                                                                    
                                                                                                                                    export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)

                                                                                                                            }

                                                                                                                        export enum AadcGuidelinesStateEntityKey {
                                                                                                                            Egw3OTMXNTkxMTc1MTEgmQIoAQ3D3D = "Egw3OTMxNTkxMTc1MTEgmQIoAQ%3D%3D",
                                                                                                                        }
                                                                                                                                                                                                                       
                                                                                                        export interface PurpleCommand {
                                                                                                            clickTrackingParams: string;//XXX
                                                                                                            openPopupAction?: OnClickCommandOpenPopupAction;//XXX
                                                                                                            commandMetadata?: AddToWatchLaterCommandCommandMetadata;//XXX
                                                                                                            createBackstagePostEndpoint?: CreateBackstagePostEndpoint;//XXX
                                                                                                            signalServiceEndpoint?: CommandSignalServiceEndpoint;
                                                                                                        }
                                                                                                        
                                                                                                            export interface CreateBackstagePostEndpoint {
                                                                                                                createBackstagePostParams: string;//XXX
                                                                                                            }
    

                                export interface SubscribeCommand {
                                    clickTrackingParams: string;//XXX
                                    commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                    subscribeEndpoint: SubscribeEndpoint;//XXX
                                }
                                                                                                              
                                export interface OnUnsubscribeEndpoint {
                                    clickTrackingParams: string;//XXX
                                    commandMetadata: OnUnsubscribeEndpointCommandMetadata;//XXX
                                    signalServiceEndpoint: OnUnsubscribeEndpointSignalServiceEndpoint;//XXX
                                }

                                    export interface OnUnsubscribeEndpointCommandMetadata {
                                        webCommandMetadata: StickyWebCommandMetadata;//XXX
                                    }
                                    
                                        export interface StickyWebCommandMetadata {
                                            sendPost: boolean;//XXX
                                        }
                                  
                      
  
                        export interface MetadataRowContainer {
                            metadataRowContainerRenderer: MetadataRowContainerRenderer;//XXX
                        }
                        
                            export interface MetadataRowContainerRenderer {
                                collapsedItemCount: number;//XXX
                                trackingParams: string;//XXX
                            }                                                                                          
                                                                                                                
                            
                        export interface AttributedDescription {
                            content: string;//XXX
                            commandRuns: CommandRun[];//XXX
                            styleRuns: StyleRun[];//XXX
                        }
                        
                            export interface CommandRun {
                                startIndex: number;//XXX
                                length: number;//XXX
                                onTap: OnTap;//XXX
                                loggingDirectives?: CommandRunLoggingDirectives;
                            }

                                export interface OnTap {
                                    innertubeCommand: InnertubeCommand;//XXX
                                }
                                
                                export interface InnertubeCommand {
                                    clickTrackingParams: string;//XXX
                                    commandMetadata: EndpointCommandMetadata;//XXX
                                    urlEndpoint: InnertubeCommandURLEndpoint;//XXX
                                  }

                                    export interface InnertubeCommandURLEndpoint {
                                        url: string;//XXX
                                        target: Target;//XXX
                                        nofollow?: boolean;//XXX
                                    }

                                        export enum Target {
                                            TargetNewWindow = "TARGET_NEW_WINDOW",//XXX
                                        }

                                
                                export interface CommandRunLoggingDirectives {
                                    trackingParams: string;
                                    enableDisplayloggerExperiment: boolean;
                                }

                            export interface StyleRun {
                                startIndex: number;//XXX
                                length: number;//XXX
                                styleRunExtensions: StyleRunExtension;//XXX
                            }

                                //Add
                                export interface StyleRunExtension {
                                    styleRunColorMapExtension: StyleRunColorMapExtension;//XXX
                                }

                                    //Add
                                    //colorMap specify "USER_INTERFACE_THEME_LIGHT" , "USER_INTERFACE_THEME_DARK" only so len(map)==2
                                    export interface StyleRunColorMapExtension {
                                        colorMap: ColorMap[];//XXX
                                    }

                                        //Add
                                        export interface ColorMap {
                                            key: string; //XXX //"USER_INTERFACE_THEME_LIGHT" , "USER_INTERFACE_THEME_DARK"
                                            value: number;//XXX //4279440147 , 4278607828
                                        }
                                
         
                    export interface PurpleItemSectionRenderer {
                        contents: PurpleContent[];//XXX
                        trackingParams: string;//XXX
                        sectionIdentifier: string;//XXX
                        targetId?: string;//XXX
                    }
                    
                        export interface PurpleContent {
                            commentsEntryPointHeaderRenderer?: CommentsEntryPointHeaderRenderer;//XXX
                            continuationItemRenderer?: PurpleContinuationItemRenderer;//XXX
                        }
                        
                            export interface CommentsEntryPointHeaderRenderer {
                                headerText: Subtitle;//XXX
                                onTap: ShowMoreCommand;//XXX
                                trackingParams: string;//XXX
                                commentCount: HeaderText;//XXX
                                contentRenderer: ContentRenderer;//XXX
                                targetId: string;//XXX
                            }

                                export interface ShowMoreCommand {
                                    clickTrackingParams: string;//XXX
                                    commandExecutorCommand: ShowMoreCommandCommandExecutorCommand;//XXX
                                }
                                
                                    export interface ShowMoreCommandCommandExecutorCommand {
                                        commands: OnShowCommandElement[];//XXX
                                    }
                                
                                        export interface OnShowCommandElement {
                                            clickTrackingParams: string;//XXX
                                            changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;//XXX 1
                                            scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommandClass;//XXX 2
                                            showEngagementPanelScrimAction?: ShowEngagementPanelScrimAction;//XXX 3 ;  1 XOR 2 XOR 3 ?
                                        }
                                
                                            export interface ScrollToEngagementPanelCommandClass {
                                                targetId: string;//XXX
                                            }
                                        

                                            export interface ShowEngagementPanelScrimAction {
                                                engagementPanelTargetId: string;//XXX
                                                onClickCommands: OnClickCommand[];//XXX
                                            }
                                
                                                export interface OnClickCommand {
                                                    clickTrackingParams: string;//XXX
                                                    openPopupAction: OnClickCommandOpenPopupAction;//XXX
                                                }
                                
                                                    export interface OnClickCommandOpenPopupAction {
                                                        popup: PurplePopup;//XXX
                                                        popupType: PopupType;//XXX
                                                    }
                                                    
                                                        export interface PurplePopup {
                                                            confirmDialogRenderer: PurpleConfirmDialogRenderer;//XXX
                                                        }
                                                    
                                                            export interface PurpleConfirmDialogRenderer {
                                                                title: HeaderText;//XXX
                                                                trackingParams: string;//XXX
                                                                dialogMessages: HeaderText[];//XXX
                                                                confirmButton: PurpleButton;//XXX
                                                                cancelButton: PurpleButton;//XXX
                                                                primaryIsCancel: boolean;//XXX
                                                            }
                                                            
                                                                export interface PurpleButton {
                                                                    buttonRenderer: PurpleButtonRenderer;//XXX
                                                                }
                                                    
                                                                    export interface PurpleButtonRenderer {
                                                                        style: ButtonRendererStyle;//XXX
                                                                        size: SizeTypeEnum;//XXX
                                                                        isDisabled: boolean;//XXX
                                                                        text: HeaderText;//XXX
                                                                        trackingParams: string;//XXX
                                                                        command?: FluffyCommand;//XXX
                                                                    }
                                                                                                                        
                                                                        export interface FluffyCommand {
                                                                            clickTrackingParams: string;//XXX
                                                                            commandExecutorCommand?: PurpleCommandExecutorCommand;//XXX 1
                                                                            commandMetadata?: EndpointCommandMetadata;//XXX 2 ; 1 XOR 2 ?
                                                                            urlEndpoint?: CommandURLEndpoint;//XXX
                                                                        }
                                                    
                                                                            export interface PurpleCommandExecutorCommand {
                                                                                commands: TentacledCommand[];//XXX
                                                                            }
                                                                            
                                                                                export interface TentacledCommand {
                                                                                    clickTrackingParams: string;//XXX
                                                                                    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;//XXX 1
                                                                                    hideEngagementPanelScrimAction?: HideEngagementPanelScrimAction;//XXX 2
                                                                                    loopCommand?: LoopCommand;// //XXX 3 ; 1 XOR 2 XOR 3 ?
                                                                                }
                                                                                    
                                                                                    export interface HideEngagementPanelScrimAction {
                                                                                        engagementPanelTargetId: string;//XXX
                                                                                    }
                                                                                    
                                                                                    export interface LoopCommand {
                                                                                        loop: boolean;//XXX
                                                                                    }

                                                                            export interface CommandURLEndpoint {
                                                                                url: string;//XXX
                                                                                target: Target;//XXX
                                                                            }


                                export interface OnTapCommandClass {
                                    clickTrackingParams: string;
                                    changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction;
                                }

                                                
                                export interface ContentRenderer {
                                    commentsEntryPointTeaserRenderer: CommentsEntryPointTeaserRenderer;//XXX
                                }
                                                                                    
                                export interface CommentsEntryPointTeaserRenderer {
                                    teaserAvatar: Avatar;//XXX
                                    teaserContent: HeaderText;//XXX
                                    trackingParams: string;//XXX
                                }

                                    export interface Avatar {
                                        thumbnails: Thumbnail[];//XXX
                                        accessibility: DisabledAccessibilityData;//XXX
                                    }

                                        export interface Thumbnail {
                                            url: string;
                                            width?: number; //XXX-Add notRequired
                                            height?: number;//XXX-Add notRequired
                                        }


                            export interface PurpleContinuationItemRenderer {
                                trigger: string;//XXX //? "CONTINUATION_TRIGGER_*"
                                continuationEndpoint: PurpleContinuationEndpoint;//XXX
                            }
                                        
                                export interface PurpleContinuationEndpoint {
                                    clickTrackingParams: string;//XXX
                                    commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                    continuationCommand: ContinuationEndpointContinuationCommand;//XXX
                                }
                                            
                                    export interface ContinuationEndpointContinuationCommand {
                                        token: string;//XXX
                                        request: string;//XXX //? "CONTINUATION_REQUEST_TYPE_*"
                                    }
  
            export interface TwoColumnWatchNextResultsAutoplay {
                autoplay: AutoplayAutoplay;//XXX
            }
    
                export interface AutoplayAutoplay {
                    sets: Set[];//XXX
                    countDownSecs: number;//XXX
                    trackingParams: string;//XXX
                }
  
                    export interface Set {
                        mode: string;//XXX
                        autoplayVideo: NavigationEndpoint;//XXX
                    }
                                                
                    
 
                                            
            export interface TwoColumnWatchNextResultsSecondaryResults {
                secondaryResults: SecondaryResultsSecondaryResults;//XXX
            }

            
                export interface SecondaryResultsSecondaryResults {
                    results: SecondaryResultsResult[];//XXX
                    continuations?: Continuation[];
                    trackingParams: string;//XXX
                }
        
                    export interface SecondaryResultsResult {
                        relatedChipCloudRenderer: RelatedChipCloudRenderer;//Add-XXX
                        itemSectionRenderer : ItemSectionRenderer2;//XXX 
                        compactVideoRenderer: CompactVideoRenderer;//XXX 
                    }

                        export interface RelatedChipCloudRenderer {//Add-
                            content: Content3//XXX
                        }
                            
                        export interface Content3{//Add-
                            chipCloudRenderer: ChipCloudRenderer; //XXX 
                        }

                            export interface ChipCloudRenderer {//Add-
                                chips: Chip[];//XXX 
                                trackingParams: string;//XXX 
                                horizontalScrollable: boolean;//XXX 
                                nextButton: NextButton;//XXX 
                                previousButton: PreviousButton;//XXX 
                            }

                                export interface Chip {//Add-
                                    chipCloudChipRenderer: ChipCloudChipRenderer;//XXX 
                                }

                                    export interface ChipCloudChipRenderer {//Add-
                                        style: StyleClass;//XXX 
                                        text: Title;//XXX 
                                        navigationEndpoint: NavigationEndpoint6;//XXX 
                                        trackingParams: string;//XXX 
                                        isSelected: boolean;//XXX 
                                    }

                                        export interface NavigationEndpoint6 {//Add-
                                            clickTrackingParams: string;//XXX  
                                            relatedChipCommand?: RelatedChipCommand;//XXX 1
                                            commandMetadata?: AddToWatchLaterCommandCommandMetadata;//XXX 2
                                            continuationCommand?: ServiceEndpointContinuationCommand;//XXX 2 ; 1 XOR 2 ?
                                        }

                                            export interface RelatedChipCommand {//Add-
                                                targetSectionIdentifier: string//XXX 
                                                loadCached: boolean//XXX 
                                            }
                                            
                                            export interface ServiceEndpointContinuationCommand {
                                                token: string;//XXX 
                                                request: string;//XXX 
                                                command: ContinuationCommandCommand;//XXX 
                                            }

                                                export interface ContinuationCommandCommand {
                                                    clickTrackingParams: string;//XXX 
                                                    showReloadUiCommand: ScrollToEngagementPanelCommandClass;//XXX 
                                                }

                                export interface PreviousButton {//Add-
                                    buttonRenderer: ButtonRenderer8;//XXX 
                                }
            
                                    export interface ButtonRenderer8 {//Add-
                                        style: StyleType;//XXX 
                                        size: SizeTypeEnum;//XXX 
                                        isDisabled: boolean;//XXX 
                                        icon: Icon;//XXX 
                                        accessibility: Accessibility;//XXX 
                                        trackingParams: string;//XXX 
                                    }

                                export interface NextButton {//Add-
                                    buttonRenderer: ButtonRenderer8;//XXX 
                                }

                        export interface ItemSectionRenderer2 {
                            contents: Content4[];//XXX 
                            trackingParams: string;//XXX 
                            sectionIdentifier: string;//XXX 
                            targetId: string;//XXX 
                        }

                            //XOR union 
                            export interface Content4 {
                                compactVideoRenderer?: CompactVideoRenderer;//XXX 1
                                compactRadioRenderer?: CompactRadioRenderer // 2 
                                continuationItemRenderer?: ContinuationItemRenderer2//XXX 3 ; 1 XOR 2 XOR 3 
                            }
                            
                
                                export interface CompactVideoRenderer {
                                    videoId: string;//XXX 
                                    thumbnail: BackgroundClass;//XXX 
                                    title: ShortViewCountText;//XXX 
                                    longBylineText: Byline;//XXX 
                                    publishedTimeText: HeaderText;//XXX 
                                    viewCountText: HeaderText;//XXX 
                                    lengthText: ShortViewCountText;//XXX 
                                    navigationEndpoint: CompactVideoRendererNavigationEndpoint;//XXX 
                                    shortBylineText: Byline;//XXX 
                                    badges?: PurpleBadge[];//XXX
                                    channelThumbnail: BackgroundClass;//XXX
                                    ownerBadges?: OwnerBadgeElement[];//XXX
                                    trackingParams: string;//XXX
                                    shortViewCountText: ShortViewCountText;//XXX
                                    menu: CompactVideoRendererMenu;//XXX
                                    thumbnailOverlays: CompactVideoRendererThumbnailOverlay[];//XXX
                                    accessibility: DisabledAccessibilityData;//XXX
                                    richThumbnail?: RichThumbnail;//XXX
                                }
                            
                            
                                    export interface CompactVideoRendererNavigationEndpoint {
                                        clickTrackingParams: string;//XXX 
                                        commandMetadata: EndpointCommandMetadata;//XXX 
                                        watchEndpoint?: PurpleWatchEndpoint;//XXX
                                        browseEndpoint?: NavigationEndpointBrowseEndpoint;//XXX 
                                    }
                            
                                        export interface PurpleWatchEndpoint {
                                            videoId: string;//XXX
                                            nofollow: boolean;//XXX
                                            watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;//XXX
                                            params?: string;
                                            startTimeSeconds?: number;
                                        }

                                    export interface PurpleBadge {
                                        metadataBadgeRenderer: PurpleMetadataBadgeRenderer;
                                    }
                                          
                                        export interface PurpleMetadataBadgeRenderer {
                                            style: string;
                                            label: string;
                                            trackingParams: string;
                                        }
                                          
                                         

                                    export interface CompactVideoRendererMenu {
                                        menuRenderer: PurpleMenuRenderer;//XXX
                                    }
                            
                                        export interface PurpleMenuRenderer {
                                            items: FluffyItem[];//XXX
                                            trackingParams: string;//XXX
                                            accessibility: DisabledAccessibilityData;//XXX
                                            targetId?: string;//XXX
                                        }
                                        
                                            export interface FluffyItem {
                                                menuServiceItemRenderer?: FluffyMenuServiceItemRenderer;//XXX 1
                                                menuServiceItemDownloadRenderer?: ItemMenuServiceItemDownloadRenderer;//XXX 2 ; 1 XOR 2 ?
                                            }
                                        
                                                export interface FluffyMenuServiceItemRenderer {
                                                    text: Subtitle;//XXX
                                                    icon: Icon;//XXX
                                                    serviceEndpoint: HilariousServiceEndpoint;//XXX
                                                    trackingParams: string;//XXX
                                                    hasSeparator?: boolean;
                                                }
                                                    
                                                    export interface HilariousServiceEndpoint {
                                                        clickTrackingParams: string;//XXX
                                                        commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                                        signalServiceEndpoint?: TentacledSignalServiceEndpoint;//XXX
                                                        playlistEditEndpoint?: AddToWatchLaterCommandPlaylistEditEndpoint;
                                                        addToPlaylistServiceEndpoint?: WatchEndpoint;
                                                        shareEntityServiceEndpoint?: ShareEntityServiceEndpoint;
                                                        feedbackEndpoint?: FeedbackEndpoint;//XXX
                                                        getReportFormEndpoint?: GetTranscriptEndpointClass;//XXX
                                                    }

                                                        export interface TentacledSignalServiceEndpoint {
                                                            signal: SignalEnum;
                                                            actions: HilariousAction[];
                                                        }
                                                        
                                                            export interface HilariousAction {
                                                                clickTrackingParams: string;
                                                                addToPlaylistCommand?: AddToPlaylistCommand;
                                                                openPopupAction?: IndigoOpenPopupAction;
                                                            }
                                                            
                                                        
                                                                export interface IndigoOpenPopupAction {
                                                                    popup: IndecentPopup;
                                                                    popupType: PopupType;
                                                                }
                                                                    
                                                                    export interface IndecentPopup {
                                                                        notificationActionRenderer: NotificationActionRenderer;
                                                                    }
                                                        
                                                                        export interface NotificationActionRenderer {
                                                                            responseText: HeaderText;
                                                                            trackingParams: string;
                                                                        }

                                        
                                                        export interface FeedbackEndpoint {
                                                            feedbackToken: string;//XXX
                                                            uiActions: UIActions;//XXX
                                                            actions: FeedbackEndpointAction[];//XXX
                                                        }
                                        
                                                            export interface UIActions {
                                                                hideEnclosingContainer: boolean;//XXX
                                                            }
                                                                
                                                            export interface FeedbackEndpointAction {
                                                                clickTrackingParams: string;//XXX
                                                                replaceEnclosingAction: ReplaceEnclosingAction;//XXX
                                                            }
                                                            
                                                                export interface ReplaceEnclosingAction {
                                                                    item: ReplaceEnclosingActionItem;//XXX
                                                                }
                                                                    
                                                                    export interface ReplaceEnclosingActionItem {
                                                                        notificationMultiActionRenderer: NotificationMultiActionRenderer;//XXX
                                                                    }
                                                            
                                                                        export interface NotificationMultiActionRenderer {
                                                                            responseText: ResponseText;//XXX
                                                                            buttons: Button[];//XXX
                                                                            trackingParams: string;//XXX
                                                                            dismissalViewStyle: DismissalViewStyle;//XXX
                                                                        }

                                                                            export interface Button {
                                                                                buttonRenderer: ButtonButtonRenderer;//XXX
                                                                            }
                                                                            
                                                                                export interface ButtonButtonRenderer {
                                                                                    style: ButtonRendererStyle;//XXX
                                                                                    text: Title;//XXX
                                                                                    serviceEndpoint?: AmbitiousServiceEndpoint;//XXX
                                                                                    trackingParams: string;//XXX
                                                                                    command?: CunningCommand;//XXX
                                                                                }
                                                                                    
                                                                                    export interface AmbitiousServiceEndpoint {
                                                                                        clickTrackingParams: string;//XXX
                                                                                        commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                                                                        undoFeedbackEndpoint?: UndoFeedbackEndpoint;//XXX
                                                                                        signalServiceEndpoint?: CommandSignalServiceEndpoint;//XXX
                                                                                    }
                                                                                        export interface UndoFeedbackEndpoint {
                                                                                            undoToken: string;//XXX
                                                                                            actions: UndoFeedbackEndpointAction[];//XXX
                                                                                        }
                                                                                            export interface UndoFeedbackEndpointAction {
                                                                                                clickTrackingParams: string;//XXX
                                                                                                undoFeedbackAction: AdsEngagementPanelContentRenderer;//XXX
                                                                                            }
                                                                            
                                                                                        export interface CommandSignalServiceEndpoint {
                                                                                            signal: SignalEnum;//XXX
                                                                                            actions: TentacledAction[];//XXX
                                                                                        }
                                                                                            
                                                                                            export interface TentacledAction {
                                                                                                clickTrackingParams: string;//XXX
                                                                                                signalAction: Signal;//XXX
                                                                                            }
                                                                                                    
                                                                                                export interface Signal {
                                                                                                    signal: string;//XXX
                                                                                                }

                                                                                    export interface CunningCommand {
                                                                                        clickTrackingParams: string;
                                                                                        commandMetadata: EndpointCommandMetadata;
                                                                                        urlEndpoint: CommandURLEndpoint;
                                                                                    }
                                            
                                                                            export interface ResponseText {
                                                                                runs?: SubtitleRun[];//XXX
                                                                                accessibility: DisabledAccessibilityData;//XXX
                                                                                simpleText?: ResponseTextSimpleText.enum_type;
                                                                            }
                                                                                export namespace ResponseTextSimpleText {

                                                                                    export enum enum_type {
                                                                                        VideoDeleted = "VideoDeleted",
                                                                                    }

                                                                                    export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                
                                                                                    const  arr_regex_field = [] as const 
                                                                                    
                                                                                    const arr_regex_values = [] as const 

                                                                                    const fr_trad_arr = ["Vidéo supprimée"] as const 
                                                                                    const jap_trad_arr = [ "動画が削除されました"] as const 
                                                                                    const en_trad_arr = [ "Video deleted"] as const 

                                                                                    const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                    
                                                                                    export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)

                                                                                }
                                            
                                                                            export enum DismissalViewStyle {
                                                                                DismissalViewStyleCompactTall = "DISMISSAL_VIEW_STYLE_COMPACT_TALL",
                                                                            }


                                                export interface ItemMenuServiceItemDownloadRenderer {
                                                    serviceEndpoint: IndecentServiceEndpoint;//XXX
                                                    trackingParams: string;//XXX
                                                }
                                                                            
                                                    export interface IndecentServiceEndpoint {
                                                        clickTrackingParams: string;//XXX
                                                        offlineVideoEndpoint: FluffyOfflineVideoEndpoint;//XXX
                                                    }
                                                                            
                                                        export interface FluffyOfflineVideoEndpoint {
                                                            videoId: string;//XXX
                                                            onAddCommand: FluffyOnAddCommand;//XXX
                                                        }              
                                                            export interface FluffyOnAddCommand {
                                                                clickTrackingParams: string;//XXX
                                                                getDownloadActionCommand: GetDownloadActionCommand;//XXX
                                                            }
                                                                                                        
                                                                export interface GetDownloadActionCommand {
                                                                    videoId: string;//XXX
                                                                    params: string;//XXX
                                                                }


                                    export interface CompactVideoRendererThumbnailOverlay {
                                        thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer;//XXX
                                        thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer;//XXX
                                        thumbnailOverlayResumePlaybackRenderer?: ThumbnailOverlayResumePlaybackRenderer;//XXX
                                        thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;//XXX
                                    }
                                        export interface ThumbnailOverlayTimeStatusRenderer {
                                            text: ShortViewCountText;//XXX
                                            style: ThumbnailOverlayTimeStatusRendererStyle;//XXX
                                        }
                                        
                                            export enum ThumbnailOverlayTimeStatusRendererStyle {
                                                Default = "DEFAULT",//XXX
                                            }

                                        export interface ThumbnailOverlayToggleButtonRenderer {
                                            isToggled?: boolean;//XXX
                                            untoggledIcon: Icon;//XXX
                                            toggledIcon: Icon;//XXX
                                            untoggledTooltip: UntoggledTooltip.enum_type;//XXX
                                            toggledTooltip: ThumbnailOverlayToggleButtonRendererToggledTooltip.enum_type;//XXX
                                            untoggledServiceEndpoint: UntoggledServiceEndpoint;//XXX
                                            toggledServiceEndpoint?: RemoveFromWatchLaterCommand;//XXX
                                            untoggledAccessibility: DisabledAccessibilityData;//XXX
                                            toggledAccessibility: DisabledAccessibilityData;//XXX
                                            trackingParams: string;//XXX
                                        }
                                            export namespace UntoggledTooltip {
                                                export enum enum_type {
                                                    AddToQueue = "AddToQueue", //Add to queue
                                                    WatchLater = "WatchLater",//Watch later
                                                }

                                                export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                
                                                const  arr_regex_field = [] as const 
                                                
                                                const arr_regex_values = [] as const 

                                                const fr_trad_arr = ["Ajouter à la file d'attente","À regarder plus tard"] as const 
                                                const jap_trad_arr = [ "キューに追加","後で見る"] as const 
                                                const en_trad_arr = [ "Add to queue","Watch later"] as const 

                                                const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                    
                                                export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)



                                            }

                                                /*export type t_trad_untoggledTooltip = createTraductionFromEnumAndArr <UntoggledTooltip,
                                                [typeof en_trad_arr,typeof fr_trad_arr ,typeof jap_trad_arr],t_arr_yt_lang>*/

                                                export namespace ThumbnailOverlayToggleButtonRendererToggledTooltip{

                                                    export enum enum_type {
                                                        Added = "Added",//"Ajoutée"
                                                    }

                                                    export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                
                                                    const  arr_regex_field = [] as const 
                                                    
                                                    const arr_regex_values = [] as const 

                                                    const fr_trad_arr = ["Ajoutée",] as const 
                                                    const jap_trad_arr = [ "追加済み"] as const 
                                                    const en_trad_arr = [ "Added"] as const 

                                                    const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                    
                                                    export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)
    

                                                }


                                            /*export type t_trad_thumbnailOverlayToggleButtonRendererToggledTooltip = createTraductionFromEnumAndArr <ThumbnailOverlayToggleButtonRendererToggledTooltip,
                                            [typeof en_trad_arr,typeof fr_trad_arr ,typeof jap_trad_arr],t_arr_yt_lang>
                                            */

                                            export interface UntoggledServiceEndpoint {
                                                clickTrackingParams: string;//XXX
                                                commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                                playlistEditEndpoint?: AddToWatchLaterCommandPlaylistEditEndpoint;//XXX
                                                signalServiceEndpoint?: UntoggledServiceEndpointSignalServiceEndpoint;
                                            }

                                                export interface AddToWatchLaterCommandPlaylistEditEndpoint {
                                                    playlistId: PlaylistID;//XXX
                                                    actions: PurpleAction[];//XXX
                                                }
                                                
                                                    export interface PurpleAction {
                                                        addedVideoId: string;//XXX
                                                        action: MagentaAction;//XXX
                                                    }
                                                
                                                        export enum MagentaAction {
                                                            ActionAddVideo = "ACTION_ADD_VIDEO",//XXX
                                                        }
                                                
                                                        export enum PlaylistID {
                                                            Wl = "WL",//XXX
                                                        }

                                                export interface UntoggledServiceEndpointSignalServiceEndpoint {
                                                    signal: SignalEnum;//XXX
                                                    actions: AmbitiousAction[];//XXX
                                                }
                                                    
                                                    export interface AmbitiousAction {
                                                        clickTrackingParams: string;//XXX
                                                        addToPlaylistCommand: AddToPlaylistCommand;//XXX
                                                    }
                                                        export interface AddToPlaylistCommand {
                                                            openMiniplayer: boolean;//XXX
                                                            openListPanel: boolean;//XXX
                                                            videoId: string;//XXX
                                                            listType: ListType;//XXX
                                                            onCreateListCommand: OnCreateListCommand;//XXX
                                                            videoIds: string[];//XXX
                                                        }
                                                            export enum ListType {
                                                                PlaylistEditListTypeQueue = "PLAYLIST_EDIT_LIST_TYPE_QUEUE",//XXX
                                                            }

                                                            export interface OnCreateListCommand {
                                                                clickTrackingParams: string;//XXX
                                                                commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                                                createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint;//XXX
                                                            }
                                                            
                                                                export interface CreatePlaylistServiceEndpoint {
                                                                    videoIds: string[];//XXX
                                                                    params: Params;//XXX
                                                                }
                                                                
                                                                    export enum Params {
                                                                        CAQ3D = "CAQ%3D",//XXX
                                                                    }
                                            
                                            export interface RemoveFromWatchLaterCommand {
                                                clickTrackingParams: string;//XXX
                                                commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                                playlistEditEndpoint: RemoveFromWatchLaterCommandPlaylistEditEndpoint;//XXX
                                            }
                                                                      
                                                export interface RemoveFromWatchLaterCommandPlaylistEditEndpoint {
                                                    playlistId: PlaylistID;//XXX
                                                    actions: FluffyAction[];//XXX
                                                }
                                                                      
                                                    export interface FluffyAction {
                                                        action: FriskyAction;//XXX
                                                        removedVideoId: string;//XXX
                                                    }
                                
                                                        export enum FriskyAction {
                                                            ActionRemoveVideoByVideoID = "ACTION_REMOVE_VIDEO_BY_VIDEO_ID",//XXX
                                                        }
                                                                      
                                        export interface ThumbnailOverlayResumePlaybackRenderer {
                                            percentDurationWatched: number;//XXX
                                        }
                                            
                                        export interface ThumbnailOverlayNowPlayingRenderer {
                                            text: Subtitle;//XXX
                                        }

                                    export interface RichThumbnail {
                                        movingThumbnailRenderer: MovingThumbnailRenderer;//XXX
                                    }
                                          
                                        export interface MovingThumbnailRenderer {
                                            movingThumbnailDetails?: MovingThumbnailDetails;//XXX
                                            enableHoveredLogging: boolean;//XXX
                                            enableOverlay: boolean;//XXX
                                        }
                                          
                                            export interface MovingThumbnailDetails {
                                                thumbnails: Thumbnail[];//XXX
                                                logAsMovingThumbnail: boolean;//XXX
                                            }
                                          

                                export interface CompactRadioRenderer {
                                    playlistId: string;
                                    thumbnail: Thumbnail8;
                                    title: Title;
                                    navigationEndpoint: NavigationEndpoint;
                                    videoCountText: Subtitle;
                                    secondaryNavigationEndpoint: NavigationEndpoint;
                                    longBylineText: HeaderText;
                                    trackingParams: string;
                                    thumbnailText: Subtitle;
                                    videoCountShortText: Subtitle;
                                    shareUrl: string
                                    menu: Menu
                                    thumbnailOverlays: ThumbnailOverlay2[]
                                }

                                    export interface Thumbnail8 {
                                        thumbnails: Thumbnail[]
                                        sampledThumbnailColor: SampledThumbnailColor
                                    }

                                        

                                        export interface SampledThumbnailColor {
                                            red: number
                                            green: number
                                            blue: number
                                        }

                                    export interface Menu {
                                        menuRenderer: MenuRenderer
                                    }

                                        export interface MenuRenderer {
                                            items: Item[];
                                            trackingParams: string;
                                            accessibility: Accessibility;
                                            menuPopupAccessibility?: MenuPopupAccessibility;
                                        }
                                        
                                            export interface Item {
                                                menuServiceItemRenderer: MenuServiceItemRenderer;
                                            }
                                                
                                                export interface MenuServiceItemRenderer {
                                                    text: Subtitle;
                                                    icon: Icon;
                                                    serviceEndpoint: MenuServiceItemRendererServiceEndpoint;
                                                    trackingParams: string;
                                                }
                                                    
                                                    export interface MenuServiceItemRendererServiceEndpoint {
                                                        clickTrackingParams: string;
                                                        commandMetadata: DefaultServiceEndpointCommandMetadata;
                                                        getReportFormEndpoint: GetReportFormEndpoint;
                                                    }

                                                        export interface DefaultServiceEndpointCommandMetadata {
                                                            webCommandMetadata: PurpleWebCommandMetadata;
                                                        }
                                        
                                        
                                                            export interface PerformCommentActionEndpoint {
                                                                action: string;
                                                                clientActions: ClientAction[];
                                                            }
                                        
                                                                export interface ClientAction {
                                                                    clickTrackingParams: string;
                                                                    updateCommentVoteAction: UpdateCommentVoteAction;
                                                                }
                                        
                                                                    export interface UpdateCommentVoteAction {
                                                                        voteCount: VoteCount;
                                                                        voteStatus: string;
                                                                    }
                                        
                                                                        export interface VoteCount {
                                                                            accessibility: Accessibility;
                                                                            simpleText: string;
                                                                        }

                                                        export interface GetReportFormEndpoint {
                                                            params: string;
                                                        }
                                                      
                                            export interface MenuPopupAccessibility {
                                                    label: string;
                                            }

                                        export interface ThumbnailOverlay2 {
                                            thumbnailOverlayBottomPanelRenderer: ThumbnailOverlayBottomPanelRenderer;
                                            thumbnailOverlayHoverTextRenderer: ThumbnailOverlayHoverTextRenderer;
                                            thumbnailOverlayNowPlayingRenderer: ThumbnailOverlayNowPlayingRenderer2;
                                        }

                                            export interface ThumbnailOverlayNowPlayingRenderer2 {
                                                text: Subtitle;
                                            }

                                            export interface ThumbnailOverlayHoverTextRenderer {
                                                text: Subtitle;
                                                icon: Icon;
                                            }

                                            export interface ThumbnailOverlayBottomPanelRenderer {
                                                icon: Icon;
                                            }

                                export interface ContinuationItemRenderer2 {
                                    trigger: string;//XXX
                                    continuationEndpoint: PurpleContinuationEndpoint;//XXX
                                    button: PurpleButton;//XXX
                                }

                    export interface Continuation {
                        nextContinuationData: NextContinuationData;
                    }
                                                
                        export interface NextContinuationData {
                            continuation: string;
                            clickTrackingParams: string;
                            label: Subtitle;
                        }
                                    

  
    export interface PlayerOverlays {
        playerOverlayRenderer: PlayerOverlayRenderer;//XXX
    }
    
        export interface PlayerOverlayRenderer {
            endScreen: EndScreen;//XXX
            autoplay: PlayerOverlayRendererAutoplay;//XXX
            shareButton: ShareButton;//XXX
            addToMenu: AddToMenu;//XXX
            videoDetails: PlayerOverlayRendererVideoDetails;//XXX
            autonavToggle: AutonavToggle;//XXX
            decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer;//XXX
        }

            export interface EndScreen {
                watchNextEndScreenRenderer: WatchNextEndScreenRenderer;//XXX
            }
                
                export interface WatchNextEndScreenRenderer {
                    results: WatchNextEndScreenRendererResult[];//XXX
                    title: HeaderText;//XXX
                    trackingParams: string;//XXX
                }
            
                    export interface WatchNextEndScreenRendererResult {
                        endScreenVideoRenderer: EndScreenVideoRenderer;//XXX
                    }
                    
                        export interface EndScreenVideoRenderer {
                            videoId: string;//XXX
                            thumbnail: BackgroundClass;//XXX
                            title: ShortViewCountText;//XXX
                            shortBylineText: Byline;//XXX
                            lengthText: ShortViewCountText;//XXX
                            lengthInSeconds: number;//XXX
                            navigationEndpoint: CurrentVideoEndpointClass;//XXX
                            trackingParams: string;//XXX
                            shortViewCountText: ShortViewCountText;//XXX
                            publishedTimeText: HeaderText;//XXX
                            thumbnailOverlays: EndScreenVideoRendererThumbnailOverlay[];//XXX
                        }
            
                            export interface EndScreenVideoRendererThumbnailOverlay {
                                thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer;//XXX
                                thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;//XXX
                            }


            export interface PlayerOverlayRendererAutoplay {
                playerOverlayAutoplayRenderer: PlayerOverlayAutoplayRenderer;//XXX
            }
            
                export interface PlayerOverlayAutoplayRenderer {
                    title: HeaderText;//XXX
                    videoTitle: ShortViewCountText;//XXX
                    byline: Byline;//XXX
                    pauseText: HeaderText;//XXX
                    background: BackgroundClass;//XXX
                    countDownSecs: number;//XXX
                    cancelButton: VoiceSearchButton;//XXX
                    nextButton: VoiceSearchButton;//XXX
                    trackingParams: string;//XXX
                    closeButton: A11YSkipNavigationButtonClass;//XXX
                    thumbnailOverlays: PlayerOverlayAutoplayRendererThumbnailOverlay[];//XXX
                    preferImmediateRedirect: boolean;//XXX
                    videoId: string;//XXX
                    publishedTimeText: HeaderText;//XXX
                    webShowNewAutonavCountdown: boolean;//XXX
                    webShowBigThumbnailEndscreen: boolean;//XXX
                    shortViewCountText: ShortViewCountText;//XXX
                    countDownSecsForFullscreen: number;//XXX
                }
            
                    export interface PlayerOverlayAutoplayRendererThumbnailOverlay {
                        thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer;//XXX
                }
        
            export interface ShareButton {
                buttonRenderer: ShareButtonButtonRenderer;//XXX
            }
                    
                export interface ShareButtonButtonRenderer {
                    style: ButtonRendererStyle ;//XXX
                    size: SizeTypeEnum;//XXX
                    isDisabled: boolean;//XXX
                    icon: Icon;//XXX
                    navigationEndpoint: ServiceEndpointClass;//XXX
                    tooltip: string;//XXX
                    trackingParams: string;//XXX
                }
    
            export interface AddToMenu {
                menuRenderer: AddToMenuMenuRenderer;//XXX
            }
            
                export interface AddToMenuMenuRenderer {
                    items: StickyItem[];//XXX
                    trackingParams: string;//XXX
                }
            
                    export interface StickyItem {
                        menuServiceItemRenderer: StickyMenuServiceItemRenderer;//XXX
                    }
            
                        export interface StickyMenuServiceItemRenderer {
                            text: Subtitle;//XXX
                            icon: Icon;//XXX
                            serviceEndpoint: AddToWatchLaterCommand;//XXX
                            trackingParams: string;//XXX
                            hasSeparator?: boolean;
                        }

                            export interface AddToWatchLaterCommand {
                                clickTrackingParams: string;//XXX
                                commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                                playlistEditEndpoint?: AddToWatchLaterCommandPlaylistEditEndpoint;//XXX
                                addToPlaylistServiceEndpoint?: WatchEndpoint;
                            }

            export interface PlayerOverlayRendererVideoDetails {
                playerOverlayVideoDetailsRenderer: PlayerOverlayVideoDetailsRenderer;//XXX
            }
                            
                export interface PlayerOverlayVideoDetailsRenderer {
                    title: HeaderText;//XXX
                    subtitle: Subtitle;//XXX
                }
    
            export interface AutonavToggle {
                autoplaySwitchButtonRenderer: AutoplaySwitchButtonRenderer;//XXX
            }
            
                export interface AutoplaySwitchButtonRenderer {
                    onEnabledCommand: OnAbledCommand;//XXX
                    onDisabledCommand: OnAbledCommand;//XXX
                    enabledAccessibilityData: DisabledAccessibilityData;//XXX
                    disabledAccessibilityData: DisabledAccessibilityData;//XXX
                    trackingParams: string;//XXX
                    enabled: boolean;//XXX
                }
            
                    export interface OnAbledCommand {
                        clickTrackingParams: string;//XXX
                        commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                        setSettingEndpoint: SetSettingEndpoint;//XXX
                    }
            
                        export interface SetSettingEndpoint {
                            settingItemId: string;//XXX
                            boolValue: boolean;//XXX
                            settingItemIdForClient: string;//XXX
                        }
                            
        export interface DecoratedPlayerBarRenderer {
            decoratedPlayerBarRenderer: DecoratedPlayerBarRendererDecoratedPlayerBarRenderer;//XXX
        }
            export interface DecoratedPlayerBarRendererDecoratedPlayerBarRenderer {
                playerBar: PlayerBar;//XXX
                playerBarActionButton?: PlayerBarActionButton;
            }
                export interface PlayerBar {
                    multiMarkersPlayerBarRenderer: MultiMarkersPlayerBarRenderer;//XXX
                }

                    export interface MultiMarkersPlayerBarRenderer {
                        visibleOnLoad: VisibleOnLoad;//XXX
                        markersMap: MarkersMap[];//XXX
                    }

                        export interface VisibleOnLoad {
                            key: string;//XXX
                        }

                        export interface MarkersMap {
                            key: string;//XXX
                            value: MarkerValue;//XXX
                        }

                            export interface MarkerValue {
                                trackingParams: string;//XXX
                                chapters?: Chapter[];//XXX
                                onChapterRepeat?: OnChapterRepeat;
                                heatmap: Heatmap;//XXX
                            }


                                export interface Chapter {
                                    chapterRenderer: ChapterRenderer;//XXX
                                }

                                    export interface ChapterRenderer {
                                        title: HeaderText ;//XXX
                                        timeRangeStartMillis: number;//XXX
                                        onActiveCommand: OnActiveCommand;//XXX
                                        thumbnail: ThumbnailDetails;//XXX
                                    }
                                    
                                    export interface ThumbnailDetails {
                                        thumbnails ?: Thumbnail[] | null ;//XXX
                                        lightColorPalette: LightColorPaletteOrDarkColorPalette;//XXX
                                        darkColorPalette: LightColorPaletteOrDarkColorPalette;//XXX
                                    }

                                        export interface LightColorPaletteOrDarkColorPalette {
                                            section1Color: number;//XXX
                                            section2Color: number;//XXX
                                            section3Color: number;//XXX
                                            primaryTitleColor: number;//XXX
                                            secondaryTitleColor: number;//XXX
                                            section4Color: number;//XXX
                                        }

                                    
                                        export interface OnActiveCommand {
                                            clickTrackingParams: string;//XXX
                                            setActivePanelItemAction: SetActivePanelItemAction;//XXX
                                        }

                                            export interface SetActivePanelItemAction {
                                                panelTargetId: string;//XXX
                                                itemIndex: number;//XXX
                                            }
                                
                                export interface OnChapterRepeat {
                                        clickTrackingParams: string;//XXX
                                        openPopupAction: OpenPopupAction11;//XXX
                                    }
                                        export interface OpenPopupAction11 {
                                            popup: Popup11;//XXX
                                            popupType:PopupType ;//XXX
                                        }
                                            export interface Popup11 {
                                                notificationActionRenderer : NotificationActionRenderer11;//XXX
                                            }
                                                export interface NotificationActionRenderer11 {
                                                    responseText: HeaderText;//XXX
                                                    trackingParams: string;//XXX
                                                    actionButton: ActionButton;//XXX
                                                    
                                                }
                                                    export interface ActionButton {
                                                        buttonRenderer: ButtonRenderer15;//XXX
                                                    }

                                                        export interface ButtonRenderer15 {
                                                            style: ButtonRendererStyle ;//XXX
                                                            text: Subtitle;//XXX
                                                            trackingParams: string;//XXX
                                                            command: Command15 ;//XXX
                                                        }
                                                            export interface Command15 {
                                                                clickTrackingParams: string;//XXX
                                                                repeatChapterCommand :RepeatChapterCommand;//XXX
                                                            }

                                                                export interface RepeatChapterCommand {
                                                                    repeat: string;//XXX
                                                                }
                                    
                                                    

                                export interface Heatmap {
                                    heatmapRenderer: HeatmapRenderer;//XXX
                                }

                                    export interface HeatmapRenderer {
                                        maxHeightDp: number;//XXX
                                        minHeightDp: number;//XXX
                                        showHideAnimationDurationMillis: number;//XXX
                                        heatMarkers: HeatMarker[];//XXX
                                        heatMarkersDecorations: HeatMarkersDecoration[];//XXX
                                    }
                                    
                                        export interface HeatMarker {
                                            heatMarkerRenderer: HeatMarkerRenderer ;//XXX
                                        }
                                            export interface HeatMarkerRenderer {
                                                timeRangeStartMillis: number;//XXX
                                                markerDurationMillis: number;//XXX
                                                heatMarkerIntensityScoreNormalized: number;//XXX
                                            }

                                        export interface HeatMarkersDecoration {
                                            timedMarkerDecorationRenderer: TimedMarkerDecorationRenderer;//XXX
                                        }
                                            export interface TimedMarkerDecorationRenderer {
                                                visibleTimeRangeStartMillis: number;//XXX
                                                visibleTimeRangeEndMillis: number;//XXX
                                                decorationTimeMillis: number;//XXX
                                                label: Subtitle;//XXX
                                                icon: string;//XXX
                                                trackingParams: string;//XXX
                                            }



                export interface PlayerBarActionButton {
                    buttonRenderer:ButtonRenderer16//XXX
                }
                    export interface ButtonRenderer16 {
                        text: Subtitle;//XXX
                        trackingParams: string;//XXX
                        command: TentacledCommand ;//XXX
                    }
                    

    export interface OnResponseReceivedEndpoint {
        clickTrackingParams: string;//XXX
        commandMetadata: OnUnsubscribeEndpointCommandMetadata;//XXX
        signalServiceEndpoint: CommandSignalServiceEndpoint;//XXX
    }
                          
                          
                        
    export interface EngagementPanel {
        engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer;//XXX
    }
    
        export interface EngagementPanelSectionListRenderer {
            content: EngagementPanelSectionListRendererContent;//XXX
            targetId: string;//XXX
            visibility: VisibilityEnum;//XXX
            panelIdentifier?: string;//XXX 2
            header?: Header;//XXX 2
            onShowCommands?: OnShowCommandElement[];//XXX
            loggingDirectives: OfflineabilityEntityLoggingDirectives;//XXX
            veType?: number;
        }

            export interface EngagementPanelSectionListRendererContent {
                adsEngagementPanelContentRenderer?: AdsEngagementPanelContentRenderer;//XXX
                clipSectionRenderer?: ClipSectionRenderer;//XXX
                structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer;//XXX
                sectionListRenderer?: SectionListRenderer;//XXX
                continuationItemRenderer?: FluffyContinuationItemRenderer;
            }

                export interface ClipSectionRenderer {
                    contents: ClipSectionRendererContent[];//XXX
                }
                
                    export interface ClipSectionRendererContent {
                        clipCreationRenderer: ClipCreationRenderer;//XXX
                    }
                
                        export interface ClipCreationRenderer {
                            trackingParams: string;//XXX
                            userAvatar: BackgroundClass;//XXX
                            titleInput: TitleInput;//XXX
                            scrubber: Scrubber;//XXX
                            saveButton: A11YSkipNavigationButtonClass;//XXX
                            displayName: HeaderText;//XXX
                            publicityLabel: string;//XXX
                            cancelButton: A11YSkipNavigationButtonClass;//XXX
                            adStateOverlay: AdStateOverlay;//XXX
                            externalVideoId: string;//XXX
                            publicityLabelIcon: string;//XXX
                        }

                            export interface AdStateOverlay {
                                clipAdStateRenderer: ClipAdStateRenderer;//XXX
                            }
                
                                export interface ClipAdStateRenderer {
                                    title: Subtitle;//XXX
                                    body: Subtitle;//XXX
                                }
                    
                        
                            export interface TitleInput {
                                clipCreationTextInputRenderer: ClipCreationTextInputRenderer;//XXX
                            }
                
                                export interface ClipCreationTextInputRenderer {
                                    placeholderText: Subtitle;//XXX
                                    maxCharacterLimit: number;//XXX
                                }
                
                            export interface Scrubber {
                                clipCreationScrubberRenderer: ClipCreationScrubberRenderer;//XXX
                            }
                
                                export interface ClipCreationScrubberRenderer {
                                    lengthTemplate: string;//XXX
                                    maxLengthMs: number;//XXX
                                    minLengthMs: number;//XXX
                                    defaultLengthMs: number;//XXX
                                    windowSizeMs: number;//XXX
                                    startAccessibility: DisabledAccessibilityData;//XXX
                                    endAccessibility: DisabledAccessibilityData;//XXX
                                    durationAccessibility: DisabledAccessibilityData;//XXX
                                }
                



                export interface StructuredDescriptionContentRenderer {
                    items: StructuredDescriptionContentRendererItem[];//XXX
                }
                
                    export interface StructuredDescriptionContentRendererItem {
                        videoDescriptionHeaderRenderer?: VideoDescriptionHeaderRenderer;//XXX
                        expandableVideoDescriptionBodyRenderer?: ExpandableVideoDescriptionBodyRenderer;//XXX
                        videoDescriptionMusicSectionRenderer?: VideoDescriptionMusicSectionRenderer;
                        videoDescriptionInfocardsSectionRenderer?: VideoDescriptionInfocardsSectionRenderer;//XXX
                    }
                
                        export interface VideoDescriptionHeaderRenderer {
                            title: Subtitle;//XXX
                            channel: HeaderText;//XXX
                            views: HeaderText;//XXX
                            publishDate: HeaderText;//XXX
                            factoid: Factoid[];//XXX
                            channelNavigationEndpoint: ChannelNavigationEndpointClass;//XXX
                            channelThumbnail: ChannelThumbnail;//XXX
                        }
                        
                            export interface Factoid {
                                factoidRenderer: FactoidRenderer;//XXX
                            }
                            
                                export interface FactoidRenderer {
                                    value: HeaderText;//XXX
                                    label: HeaderText;//XXX
                                    accessibilityText: string;//XXX
                                }
                        
                        export interface ExpandableVideoDescriptionBodyRenderer {
                            showMoreText: HeaderText;//XXX
                            showLessText: HeaderText;//XXX
                            attributedDescriptionBodyText: AttributedDescription;//XXX
                        }

                        export interface VideoDescriptionMusicSectionRenderer {
                            sectionTitle: HeaderText;
                            carouselLockups: CarouselLockup[];
                            topicLink: TopicLink;
                        }
                            export interface TopicLink {
                                topicLinkRenderer: TopicLinkRenderer;
                            }
                            
                                export interface TopicLinkRenderer {
                                    title: HeaderText;
                                    thumbnailDetails: ChannelThumbnail;
                                    endpoint: TopicLinkRendererEndpoint;
                                    callToActionIcon: Icon;
                                    trackingParams: string;
                                }

                                    export interface ChannelThumbnail {
                                        thumbnails: CommonConfig[];//XXX
                                    }
                
                            export interface CarouselLockup {
                                carouselLockupRenderer: CarouselLockupRenderer;
                            }
                
                                export interface CarouselLockupRenderer {
                                    infoRows: InfoRow[];
                                }
                
                                    export interface InfoRow {
                                        infoRowRenderer: InfoRowRenderer;
                                    }
                
                                        export interface InfoRowRenderer {
                                            title: HeaderText;
                                            defaultMetadata?: DefaultMetadata;
                                            trackingParams: string;
                                            infoRowExpandStatusKey?: string;
                                            expandedMetadata?: HeaderText;
                                            expandIcon?: Icon;
                                        }
                
                                            export interface DefaultMetadata {
                                                simpleText?: string;
                                                runs?: BylineRun[];
                                            }

                        export interface VideoDescriptionInfocardsSectionRenderer {
                            sectionTitle: HeaderText;//XXX
                            creatorVideosButton: CreatorButton;//XXX
                            creatorAboutButton: CreatorButton;//XXX
                            sectionSubtitle: ShortViewCountText;//XXX
                            channelAvatar: ChannelThumbnail;//XXX
                            channelEndpoint: ChannelNavigationEndpointClass;//XXX
                            trackingParams: string;//XXX
                        }
                        
                            export interface CreatorButton {
                                buttonRenderer: CreatorAboutButtonButtonRenderer;//XXX
                            }
                        
                                export interface CreatorAboutButtonButtonRenderer {
                                    style: string;//XXX
                                    size: SizeTypeEnum;//XXX
                                    isDisabled: boolean;//XXX
                                    text: HeaderText;//XXX
                                    icon: Icon;//XXX
                                    trackingParams: string;//XXX
                                    command: MagentaCommand;//XXX
                                }
                        
                                    export interface MagentaCommand {
                                        clickTrackingParams: string;//XXX
                                        commandMetadata: EndpointCommandMetadata;//XXX
                                        browseEndpoint: CommandBrowseEndpoint;//XXX
                                    }
                                    
                                        export interface CommandBrowseEndpoint {
                                            browseId: string;//XXX
                                            params: string;//XXX
                                        }

                export interface SectionListRenderer {
                    contents: SectionListRendererContent[];//XXX
                    trackingParams: string;//XXX
                }
                    
                    export interface SectionListRendererContent {
                        itemSectionRenderer: FluffyItemSectionRenderer;//XXX
                    }
                
                        export interface FluffyItemSectionRenderer {
                            contents: CommentRepliesRendererContent[];//XXX
                            trackingParams: string;//XXX
                            sectionIdentifier: string;//XXX
                            targetId: string;//XXX
                        }
                
                            export interface CommentRepliesRendererContent {
                                continuationItemRenderer: PurpleContinuationItemRenderer;//XXX
                            }
    
                export interface FluffyContinuationItemRenderer {
                    trigger: string;
                    continuationEndpoint: FluffyContinuationEndpoint;
                }
                
                    export interface FluffyContinuationEndpoint {
                        clickTrackingParams: string;
                        commandMetadata: AddToWatchLaterCommandCommandMetadata;
                        getTranscriptEndpoint: GetTranscriptEndpointClass;
                    }
        



            export interface OfflineabilityEntityLoggingDirectives {
                trackingParams: string;//XXX
                visibility: VisibilityClass;//XXX
                enableDisplayloggerExperiment: boolean;//XXX
            }

                export interface VisibilityClass {
                    types: string;
                }

            export interface Header {
                engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer;//XXX
            }

              
                export interface EngagementPanelTitleHeaderRenderer {
                    title: Title;//XXX
                    informationButton?: VoiceSearchButton;//XXX
                    visibilityButton: VoiceSearchButton;//XXX
                    trackingParams: string;//XXX
                    contextualInfo?: Subtitle;
                    menu?: EngagementPanelTitleHeaderRendererMenu;
                }
                
                    export interface EngagementPanelTitleHeaderRendererMenu {
                        sortFilterSubMenuRenderer?: MenuSortFilterSubMenuRenderer;
                        menuRenderer?: FluffyMenuRenderer;
                    }

                        export interface MenuSortFilterSubMenuRenderer {
                            subMenuItems: SubMenuItem[];
                            icon: Icon;
                            accessibility: DisabledAccessibilityData;
                            trackingParams: string;
                        }

                            export interface SubMenuItem {
                                title: string;
                                selected: boolean;
                                serviceEndpoint: SubMenuItemServiceEndpoint;
                                trackingParams: string;
                            }
                            
                                export interface SubMenuItemServiceEndpoint {
                                    clickTrackingParams: string;
                                    commandMetadata: AddToWatchLaterCommandCommandMetadata;
                                    continuationCommand: ServiceEndpointContinuationCommand;
                                }

                        export interface FluffyMenuRenderer {
                            items: TentacledItem[];
                            trackingParams: string;
                            accessibility: DisabledAccessibilityData;
                        }
                        
                            export interface TentacledItem {
                                menuServiceItemRenderer: TentacledMenuServiceItemRenderer;
                            }
                
                                export interface TentacledMenuServiceItemRenderer {
                                    text: Subtitle;
                                    serviceEndpoint: OnResponseReceivedEndpoint;
                                    trackingParams: string;
                                }
                            
    export interface Topbar {
        desktopTopbarRenderer: DesktopTopbarRenderer;//XXX
    }
    
        export interface DesktopTopbarRenderer {
            logo: Logo;//XXX
            searchbox: Searchbox;//XXX
            trackingParams: string;//XXX
            countryCode: string;//XXX
            topbarButtons: TopbarButton[];//XXX
            hotkeyDialog: HotkeyDialog;//XXX
            backButton: BackButtonClass;//XXX
            forwardButton: BackButtonClass;//XXX
            a11ySkipNavigationButton: A11YSkipNavigationButtonClass;//XXX //ICI
            voiceSearchButton: VoiceSearchButton;//XXX
        }

            export interface Logo {
                topbarLogoRenderer: TopbarLogoRenderer;//XXX
            }
            
                export interface TopbarLogoRenderer {
                    iconImage: Icon;//XXX
                    tooltipText: Subtitle;//XXX
                    endpoint: TopicLinkRendererEndpoint;//XXX
                    trackingParams: string;//XXX
                    overrideEntityKey: string;//XXX
                }
            
                    export interface TopicLinkRendererEndpoint {
                        clickTrackingParams: string;//XXX
                        commandMetadata: EndpointCommandMetadata;//XXX
                        browseEndpoint: EndpointBrowseEndpoint;//XXX
                    }
                    
                        export interface EndpointBrowseEndpoint {
                            browseId: string;//XXX
                        }


    
            export interface Searchbox {
                fusionSearchboxRenderer: FusionSearchboxRenderer;//XXX
            }
            
                export interface FusionSearchboxRenderer {
                    icon: Icon;//XXX
                    placeholderText: Subtitle;//XXX
                    config: FusionSearchboxRendererConfig;//XXX
                    trackingParams: string;//XXX
                    searchEndpoint: FusionSearchboxRendererSearchEndpoint;//XXX
                    clearButton: VoiceSearchButton;//XXX
                }
                    export interface FusionSearchboxRendererConfig {
                        webSearchboxConfig: WebSearchboxConfig;//XXX
                    }
                    
                        export interface WebSearchboxConfig {
                            requestLanguage: string;//XXX
                            requestDomain: string;//XXX
                            hasOnscreenKeyboard: boolean;//XXX
                            focusSearchbox: boolean;//XXX
                        }
            
                    export interface FusionSearchboxRendererSearchEndpoint {
                        clickTrackingParams: string;//XXX
                        commandMetadata: EndpointCommandMetadata;//XXX
                        searchEndpoint: SearchEndpointSearchEndpoint;//XXX
                    }
            
                        export interface SearchEndpointSearchEndpoint {
                            query: string;//XXX
                        }
            
    
    
            export interface TopbarButton {
                topbarMenuButtonRenderer?: TopbarMenuButtonRenderer;//XXX
                notificationTopbarButtonRenderer?: NotificationTopbarButtonRenderer;//XXX
            }
    
                export interface TopbarMenuButtonRenderer {
                    icon?: Icon;//XXX 1 
                    menuRenderer?: TopbarMenuButtonRendererMenuRenderer;//XXX 1
                    trackingParams: string;//XXX
                    accessibility: DisabledAccessibilityData;//XXX
                    tooltip: string;//XXX
                    style?: ButtonRendererStyle;//XXX 1
                    avatar?: Avatar;//XXX 2
                    menuRequest?: MenuRequest;//XXX 2 ; 1 XOR 2 ????
                }
    
                    export interface TopbarMenuButtonRendererMenuRenderer {
                        multiPageMenuRenderer: MenuRendererMultiPageMenuRenderer;//XXX
                    }
    
                    export interface MenuRendererMultiPageMenuRenderer {
                        sections: MultiPageMenuRendererSection[];//XXX
                        trackingParams: string;//XXX
                        style: string;//XXX
                    }
    
                        export interface MultiPageMenuRendererSection {
                            multiPageMenuSectionRenderer: MultiPageMenuSectionRenderer;//XXX
                        }
                        
                            export interface MultiPageMenuSectionRenderer {
                                items: MultiPageMenuSectionRendererItem[];//XXX
                                trackingParams: string;//XXX
                            }
    
                                export interface MultiPageMenuSectionRendererItem {
                                    compactLinkRenderer: CompactLinkRenderer;//XXX
                                }
    
                                    export interface CompactLinkRenderer {
                                        icon: Icon;//XXX
                                        title: Subtitle;//XXX
                                        navigationEndpoint: CompactLinkRendererNavigationEndpoint;//XXX
                                        trackingParams: string;//XXX
                                        style: string;//XXX
                                    }
    
                                        export interface CompactLinkRendererNavigationEndpoint {
                                            clickTrackingParams: string;//XXX
                                            commandMetadata: EndpointCommandMetadata;//XXX
                                            uploadEndpoint?: AdsEngagementPanelContentRenderer;//XXX
                                            signalNavigationEndpoint?: Signal;//XXX
                                        }

                    export interface MenuRequest {
                        clickTrackingParams: string;//XXX
                        commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX
                        signalServiceEndpoint: MenuRequestSignalServiceEndpoint;//XXX
                    }
                    
                        export interface MenuRequestSignalServiceEndpoint {
                            signal: string;//XXX
                            actions: CunningAction[];//XXX
                        }
                
                            export interface CunningAction {
                                clickTrackingParams: string;//XXX
                                openPopupAction: IndecentOpenPopupAction;//XXX
                            }
                            
                                export interface IndecentOpenPopupAction {
                                    popup: HilariousPopup;//XXX
                                    popupType: PopupType;//XXX  
                                    beReused: boolean;//XXX
                                }
                            
                                    export interface HilariousPopup {
                                        multiPageMenuRenderer: PopupMultiPageMenuRenderer;//XXX
                                    }
                
                                        export interface PopupMultiPageMenuRenderer {
                                            trackingParams: string;//XXX
                                            style: string;//XXX
                                            showLoadingSpinner: boolean;//XXX
                                        }
                

                export interface NotificationTopbarButtonRenderer {
                    icon: Icon;//XXX
                    menuRequest: MenuRequest;//XXX
                    style: NotificationButtonRendererStyle ;//XXX 
                    trackingParams: string;//XXX 
                    accessibility: DisabledAccessibilityData;//XXX 
                    tooltip: string;//XXX 
                    updateUnseenCountEndpoint: UpdateUnseenCountEndpoint;//XXX 
                    notificationCount: number;//XXX 
                    handlerDatas: string[];//XXX 
                }
                    export interface UpdateUnseenCountEndpoint {
                        clickTrackingParams: string;//XXX 
                        commandMetadata: AddToWatchLaterCommandCommandMetadata;//XXX 
                        signalServiceEndpoint: Signal;//XXX 
                    }

                    export enum NotificationButtonRendererStyle{
                        NOTIFICATION_BUTTON_STYLE_TYPE_DEFAULT ="NOTIFICATION_BUTTON_STYLE_TYPE_DEFAULT"
                    }
    

            export interface HotkeyDialog {
                hotkeyDialogRenderer: HotkeyDialogRenderer;//XXX
            }
            
                export interface HotkeyDialogRenderer {
                    title: Subtitle;//XXX
                    sections: HotkeyDialogRendererSection[];//XXX    
                    dismissButton: A11YSkipNavigationButtonClass;//XXX
                    trackingParams: string;//XXX
                }
            
                    export interface HotkeyDialogRendererSection {
                        hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer;//XXX
                    }
                        
                        export interface HotkeyDialogSectionRenderer {
                            title: Subtitle;//XXX
                            options: Option[];//XXX
                        }
            
                            export interface Option {
                                hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer;//XXX
                            }
            
                                export interface HotkeyDialogSectionOptionRenderer {
                                    label: Subtitle;//XXX
                                    hotkey: string;//XXX
                                    hotkeyAccessibilityLabel?: DisabledAccessibilityData;//XXX
                                }
                                  
  
            export interface BackButtonClass {
                buttonRenderer: BackButtonButtonRenderer;//XXX
            }
            
                export interface BackButtonButtonRenderer {
                    trackingParams: string;//XXX
                    command: OnResponseReceivedEndpoint;//XXX
                }

    export interface PageVisualEffect {
        cinematicContainerRenderer: CinematicContainerRenderer;//XXX
    }
    
        export interface CinematicContainerRenderer {
            gradientColorConfig: GradientColorConfig[];//XXX
            presentationStyle: string;//XXX
            config: CinematicContainerRendererConfig;//XXX
        }

            export interface GradientColorConfig {
                darkThemeColor: number;//XXX
                startLocation?: number;//XXX
            }
        
            export interface CinematicContainerRendererConfig {
                lightThemeBackgroundColor: number;//XXX
                darkThemeBackgroundColor: number;//XXX
                animationConfig: AnimationConfig;//XXX
                colorSourceSizeMultiplier: number;//XXX
                applyClientImageBlur: boolean;//XXX
                bottomColorSourceHeightMultiplier: number;//XXX
                maxBottomColorSourceHeight: number;//XXX
                colorSourceWidthMultiplier: number;//XXX
                colorSourceHeightMultiplier: number;//XXX
                blurStrength: number;//XXX
                enableInLightTheme: boolean;//XXX
            }
        
                export interface AnimationConfig {
                    minImageUpdateIntervalMs: number;//XXX
                    crossfadeDurationMs: number;//XXX
                    crossfadeStartOffset: number;//XXX
                    maxFrameRate: number;//XXX
                }


    export interface ResponseFrameworkUpdates {
        entityBatchUpdate: EntityBatchUpdate;//XXX
        elementUpdate: ElementUpdate;//XXX
    }

      
        export interface EntityBatchUpdate {
            mutations: any[];//XXX // TODO : rajouter  //{"entityKey":"EgZ0b3BiYXIg9QEoAQ%3D%3D","type":"ENTITY_MUTATION_TYPE_DELETE","options":{"persistenceOption":"ENTITY_PERSISTENCE_OPTION_INMEMORY_AND_PERSIST"}},
            timestamp: Timestamp;//XXX
        }
        
            export interface Timestamp {
                seconds: string;//XXX
                nanos: number;//XXX
            }
    
    
        export interface ElementUpdate {
            updates: Update[];//XXX
        }
        
            export interface Update {
                templateUpdate?: TemplateUpdate;//XXX
                resourceStatusInResponseCheck?: ResourceStatusInResponseCheck;//XXX
            }

                export interface TemplateUpdate {
                    identifier: string;//XXX
                    serializedTemplateConfig: string;//XXX
                    dependencies?: string[];//XXX
                }

            
                export interface ResourceStatusInResponseCheck {
                    resourceStatuses: ResourceStatus[];//XXX
                    serverBuildLabel: string;//XXX
                }
    
                    export interface ResourceStatus {
                        identifier: string;//XXX
                        status: string;//XXX
                    }
                    



//--------------------------------------------------------------------



export interface CommentRendererLoggingDirectives {
    trackingParams: string;
    visibility: VisibilityClass;
    enableDisplayloggerExperiment: boolean;
}



//--------------------------------------------------------------------


export type ContinuationItems = Array<{
    commentThreadRenderer: ConfinuationItem;
}>;

  export interface ConfinuationItem {
    comment: Comment;
    trackingParams: string;
    renderingPriority: string;
    isModeratedElqComment: boolean;
    loggingDirectives: LoggingDirectives;
    replies?: {
      commentRepliesRenderer: {
        teaserContents: {
          0: {
            commentRenderer: CommentRenderer;
          };
        };
      };
    };
  }
  
    export interface Comment {
        commentRenderer: CommentRenderer;
    }
    
        export interface CommentRenderer {
            authorText: AuthorText;
            authorThumbnail: AuthorThumbnail;
            authorEndpoint: AuthorEndpoint;
            contentText: ContentText;
            publishedTimeText: PublishedTimeText;
            isLiked: boolean;
            actionMenu: ActionMenu;
            commentId: string;
            actionButtons: ActionButtons;
            authorIsChannelOwner: boolean;
            currentUserReplyThumbnail: CurrentUserReplyThumbnail;
            voteStatus: string;
            trackingParams: string;
            voteCount: VoteCount;
            expandButton: Button;
            collapseButton: Button;
            loggingDirectives: LoggingDirectives;
            authorCommentBadge?: any; // A FAIRE 
        }

        export interface AuthorText {
            simpleText: string;
        }

        
        export interface AuthorThumbnail {
            thumbnails: Thumbnail[];
            accessibility: Accessibility;
        }


        export interface AuthorEndpoint {
            clickTrackingParams: string;
            commandMetadata: AuthorEndpointCommandMetadata;
            browseEndpoint: BrowseEndpoint;
          }

            export interface AuthorEndpointCommandMetadata {
                webCommandMetadata: TentacledWebCommandMetadata;
            }
        
            export interface BrowseEndpoint {
                browseId: string;
                canonicalBaseUrl?: string;
            }
          

        export interface ContentText {
            runs: ContentTextRun[];
          }
          
          export interface ContentTextRun {
            text: string;
            navigationEndpoint?: PurpleNavigationEndpoint;
          }
        
            export interface PurpleNavigationEndpoint {
                clickTrackingParams: string;
                commandMetadata: AuthorEndpointCommandMetadata;
                watchEndpoint: PurpleWatchEndpoint;
            }
                     
          
            export interface PublishedTimeText {
                runs: PublishedTimeTextRun[];
            }
            
                export interface PublishedTimeTextRun {
                    text: string;
                    navigationEndpoint: FluffyNavigationEndpoint;
                }
                
                    export interface FluffyNavigationEndpoint {
                        clickTrackingParams: string;
                        commandMetadata: AuthorEndpointCommandMetadata;
                        watchEndpoint: FluffyWatchEndpoint;
                    }

                    
                    
                        export interface FluffyWatchEndpoint {
                            videoId: string;
                            params: string;
                        }


            export interface ActionMenu {
                menuRenderer: MenuRenderer;
            }
            

            export interface ActionButtons {
                commentActionButtonsRenderer: CommentActionButtonsRenderer;
              }
              
                export interface CommentActionButtonsRenderer {
                    likeButton: LikeButton;
                    replyButton: Button;
                    dislikeButton: LikeButton;
                    trackingParams: string;
                    protoCreationMs: string;
                    style: string;
                }
            
              
                    export interface LikeButton {
                        toggleButtonRenderer: ToggleButtonRenderer;
                    }
              
                        export interface ToggleButtonRenderer {
                            style: Style;
                            size: Size;
                            isToggled: boolean;
                            isDisabled: boolean;
                            defaultIcon: Icon;
                            defaultServiceEndpoint: ServiceEndpoint;
                            toggledServiceEndpoint: ServiceEndpoint;
                            trackingParams: string;
                            defaultTooltip: string;
                            toggledTooltip: string;
                            toggledStyle: Style;
                            accessibilityData: Accessibility;
                            toggledAccessibilityData: Accessibility;
                        }
                          
                            export interface Style {
                                styleType: string;
                            }

                            export interface Size {
                                sizeType: string;
                            }
                
                
                            export interface ServiceEndpoint {
                                clickTrackingParams: string;
                                commandMetadata: DefaultServiceEndpointCommandMetadata;
                                performCommentActionEndpoint: PerformCommentActionEndpoint;
                            }
                

            export interface CurrentUserReplyThumbnail {
                thumbnails: Thumbnail[];
            }
            
            export interface LoggingDirectives {
                trackingParams: string;
                visibility: Visibility;
                enableDisplayloggerExperiment: boolean;
            }

                export interface Visibility {
                        types: string;
                    }




//--------------------------------------------------------------------

export interface DecorationRun {
        textDecorator: TextDecorator;
    }
  
        export interface TextDecorator {
            highlightTextDecorator: HighlightTextDecorator;
        }
        
            export interface HighlightTextDecorator {
                startIndex: number;
                length: number;
                backgroundColor: number;
                backgroundCornerRadius: number;
            }


  
//--------------------------------------------------------------------

export interface PlayerResponse {
    responseContext: PlayerResponseResponseContext;//XXX
    playabilityStatus: PlayabilityStatus;//XXX
    streamingData: StreamingData;
    playerAds?: PlayerAdsEntity[] ;
    heartbeatParams: HeartbeatParams;
    playbackTracking: PlaybackTracking;
    captions: Captions;
    videoDetails: PlayerResponseVideoDetails;
    annotations?: AnnotationsEntity[] ;
    playerConfig: PlayerConfig;
    storyboards: Storyboards;
    microformat: Microformat;
    cards: Cards;
    adSlots:AdSlotsEntity[] ;
    trackingParams: string;
    attestation: Attestation;
    messages?: MessagesEntity[] 
    endscreen: Endscreen
    adPlacements?: AdPlacementsEntity[]
    frameworkUpdates: PlayerResponseFrameworkUpdates;
    adBreakHeartbeatParams : string ; 
}

    
    export interface PlayerResponseResponseContext {
        serviceTrackingParams: ServiceTrackingParam[];//XXX
        mainAppWebResponseContext: MainAppWebResponseContext;
        webResponseContextExtensionData: PurpleWebResponseContextExtensionData;
    }

        export interface PurpleWebResponseContextExtensionData {
            hasDecorated: boolean;
        }
        
    export interface PlayabilityStatus {
        status: string;//XXX // A FAIRE : enum : "OK"  , ... 
        playableInEmbed: boolean;//XXX
        offlineability: Offlineability;//XXX
        miniplayer: Miniplayer;
        contextParams: string;
    }

        export interface Offlineability {
            offlineabilityRenderer: OfflineabilityRenderer;//XXX
        }
        
            export interface OfflineabilityRenderer {
                offlineable: boolean;
                formats: OfflineabilityRendererFormat[];
                clickTrackingParams: string;
            }
        
                export interface OfflineabilityRendererFormat {
                    name: Subtitle;
                    formatType: string;
                }

        export interface Miniplayer {
            miniplayerRenderer: MiniplayerRenderer;
        }
                
            export interface MiniplayerRenderer {
                playbackMode: string;
            }
  
    export interface StreamingData {
        expiresInSeconds: string;
        formats: StreamingDataFormat[];
        adaptiveFormats: AdaptiveFormat[];
    }

        export interface StreamingDataFormat {
            itag: number;
            url?: string; //XXX-Add : notRequired
            mimeType: string;
            bitrate: number;
            width: number;
            height: number;
            lastModified: string;
            quality: string;
            fps: number;
            qualityLabel: string;
            projectionType: ProjectionType;
            audioQuality: string;
            approxDurationMs: string;
            audioSampleRate: string;
            audioChannels: number;
            signatureCipher: string;
        }
                
            export enum ProjectionType {
                Rectangular = "RECTANGULAR",
            }
        
        export interface AdaptiveFormat {
            itag: number;
            url?: string; //XXX-Add : notRequired 
            mimeType: string;
            bitrate: number;
            width?: number;
            height?: number;
            initRange: InitRangeOrIndexRange;
            indexRange: InitRangeOrIndexRange;
            lastModified: string;
            contentLength: string;
            quality: string;
            fps?: number;
            qualityLabel?: string;
            projectionType: ProjectionType;
            averageBitrate: number;
            approxDurationMs: string;
            signatureCipher: string;
            colorInfo?: ColorInfo;
            highReplication?: boolean;
            audioQuality?: string;
            audioSampleRate?: string;
            audioChannels?: number;
            loudnessDb?: number;
        }

            export interface InitRangeOrIndexRange {
                start: string
                end: string
            }

            export interface ColorInfo {
                primaries: string;
                transferCharacteristics: string;
                matrixCoefficients: string;
            }


    export interface PlayerAdsEntity {
        playerLegacyDesktopWatchAdsRenderer: PlayerLegacyDesktopWatchAdsRenderer
    }
        export interface PlayerLegacyDesktopWatchAdsRenderer {
            playerAdParams: PlayerAdParams
            gutParams: GutParams
            showCompanion: boolean
            showInstream: boolean
            useGut: boolean
        }
            export interface PlayerAdParams {
                showContentThumbnail: boolean
                enabledEngageTypes: string
            }
            
            export interface GutParams {
                tag: string
            }
  
    export interface HeartbeatParams {
        heartbeatToken: string;
        intervalMilliseconds: string;
        maxRetries: string;
        drmSessionId: string;
        softFailOnError: boolean;
        heartbeatServerData: string;
    }

    export interface PlaybackTracking {
        videostatsPlaybackUrl: URL;
        videostatsDelayplayUrl: URL;
        videostatsWatchtimeUrl: URL;
        ptrackingUrl: URL;
        qoeUrl: URL;
        atrUrl: AtrURL;
        videostatsScheduledFlushWalltimeSeconds?: number[];
        videostatsDefaultFlushIntervalSeconds: number;
        youtubeRemarketingUrl: AtrURL;
	    googleRemarketingUrl: AtrURL;
      }
        
        export interface AtrURL {
            baseUrl: string;
            elapsedMediaTimeSeconds: number;  
        }
        export interface AtrURLNotMedia {
            baseUrl: string;
            offsetMilliseconds:number ;
        }      

        export interface URL {
            baseUrl: string;
        }


    export interface Captions {
        playerCaptionsTracklistRenderer: PlayerCaptionsTracklistRenderer;
    }
          
        export interface PlayerCaptionsTracklistRenderer {
            captionTracks?: CaptionTrack[];
            audioTracks?: AudioTrack[];
            translationLanguages?: TranslationLanguage[];
            defaultAudioTrackIndex: number;
        }
        
            export interface CaptionTrack {
                baseUrl: string;
                name: HeaderText;
                vssId: string;
                languageCode: string;
                kind: string;
                isTranslatable: boolean;
              }
          
            export interface AudioTrack {
                captionTrackIndices?: number[];
            }
          
            export interface TranslationLanguage {
                languageCode: string;
                languageName: HeaderText;
            }
              

    export interface PlayerResponseVideoDetails {
        videoId: string;
        title: string;
        lengthSeconds: string;
        keywords?: string[];
        channelId: string;
        isOwnerViewing: boolean;
        shortDescription: string;
        isCrawlable: boolean;
        thumbnail: BackgroundClass;
        allowRatings: boolean;
        viewCount: string;
        author: string;
        isPrivate: boolean;
        isUnpluggedCorpus: boolean;
        isLiveContent: boolean;
    }
  
  
    export interface PlayerConfig {
        audioConfig: AudioConfig;
        streamSelectionConfig: StreamSelectionConfig;
        mediaCommonConfig: MediaCommonConfig;
        webPlayerConfig: WebPlayerConfig;
      }
      
        export interface AudioConfig {
            loudnessDb: number;
            perceptualLoudnessDb: number;
            enablePerFormatLoudness: boolean;
        }
    
        export interface StreamSelectionConfig {
            maxBitrate: string;
        }
      
        export interface MediaCommonConfig {
            dynamicReadaheadConfig: DynamicReadaheadConfig;
        }
      
            export interface DynamicReadaheadConfig {
                maxReadAheadMediaTimeMs: number;
                minReadAheadMediaTimeMs: number;
                readAheadGrowthRateMs: number;
            }
      
        export interface WebPlayerConfig {
            useCobaltTvosDash: boolean;
            webPlayerActionsPorting: WebPlayerActionsPorting;
        }
        
            export interface WebPlayerActionsPorting {
                getSharePanelCommand: GetSharePanelCommand;
                subscribeCommand: SubscribeCommand;
                unsubscribeCommand: UnsubscribeCommand;
                addToWatchLaterCommand: AddToWatchLaterCommand;
                removeFromWatchLaterCommand: RemoveFromWatchLaterCommand;
            }
    
                export interface GetSharePanelCommand {
                    clickTrackingParams: string;
                    commandMetadata: AddToWatchLaterCommandCommandMetadata;
                    webPlayerShareEntityServiceEndpoint: WebPlayerShareEntityServiceEndpoint;
                }
    
                
                    export interface WebPlayerShareEntityServiceEndpoint {
                        serializedShareEntity: string;
                    }
                    
                export interface UnsubscribeCommand {
                    clickTrackingParams: string;
                    commandMetadata: AddToWatchLaterCommandCommandMetadata;
                    unsubscribeEndpoint: SubscribeEndpoint;
                }

    export interface AnnotationsEntity {
        playerAnnotationsExpandedRenderer: PlayerAnnotationsExpandedRenderer
    }
        export interface PlayerAnnotationsExpandedRenderer {
            featuredChannel: FeaturedChannel
            allowSwipeDismiss: boolean
            annotationId: string
        }
            export interface FeaturedChannel {
                startTimeMs: string
                endTimeMs: string
                watermark: ThumbnailOrWatermarkOrIconOrImage
                trackingParams: string
                navigationEndpoint: ChannelNavigationEndpointClass
                channelName: string
                subscribeButton: SubscribeButton
            }
    
            export interface ThumbnailOrWatermarkOrIconOrImage {
                thumbnails?: Thumbnail[] 
            }
                            
  
    export interface Storyboards {
        playerStoryboardSpecRenderer: PlayerStoryboardSpecRenderer;
    }
                  
        export interface PlayerStoryboardSpecRenderer {
            spec: string;
            recommendedLevel: number;
        }
                                

    export interface Microformat {
        playerMicroformatRenderer: PlayerMicroformatRenderer;
    }
    
        export interface PlayerMicroformatRenderer {
            thumbnail: BackgroundClass;
            embed: Embed;
            title: HeaderText;
            description: HeaderText;
            lengthSeconds: string;
            ownerProfileUrl: string;
            externalChannelId: string;
            isFamilySafe: boolean;
            availableCountries?: AvaibleCountry[];
            isUnlisted: boolean;
            hasYpcMetadata: boolean;
            viewCount: string;
            category: string;
            publishDate: DateStr;
            ownerChannelName: string;
            uploadDate: DateStr;
        }

            export enum AvaibleCountry {
                 AD = "AD",AE = "AE",AF = "AF",AG = "AG",AI = "AI",AL = "AL",AM = "AM",AO = "AO",AQ = "AQ",AR = "AR",AS = "AS",AT = "AT",AU = "AU",AW = "AW",AX = "AX",AZ = "AZ",BA = "BA",BB = "BB",BD = "BD",BE = "BE",BF = "BF",BG = "BG",BH = "BH",BI = "BI",BJ = "BJ",BL = "BL",BM = "BM",BN = "BN",BO = "BO",BQ = "BQ",BR = "BR",BS = "BS",BT = "BT",BV = "BV",BW = "BW",BY = "BY",BZ = "BZ",CA = "CA",CC = "CC",CD = "CD",CF = "CF",CG = "CG",CH = "CH",CI = "CI",CK = "CK",CL = "CL",CM = "CM",CN = "CN",CO = "CO",CR = "CR",CU = "CU",CV = "CV",CW = "CW",CX = "CX",CY = "CY",CZ = "CZ",DE = "DE",DJ = "DJ",DK = "DK",DM = "DM",DO = "DO",DZ = "DZ",EC = "EC",EE = "EE",EG = "EG",EH = "EH",ER = "ER",ES = "ES",ET = "ET",FI = "FI",FJ = "FJ",FK = "FK",FM = "FM",FO = "FO",FR = "FR",GA = "GA",GB = "GB",GD = "GD",GE = "GE",GF = "GF",GG = "GG",GH = "GH",GI = "GI",GL = "GL",GM = "GM",GN = "GN",GP = "GP",GQ = "GQ",GR = "GR",GS = "GS",GT = "GT",GU = "GU",GW = "GW",GY = "GY",HK = "HK",HM = "HM",HN = "HN",HR = "HR",HT = "HT",HU = "HU",ID = "ID",IE = "IE",IL = "IL",IM = "IM",IN = "IN",IQ = "IQ",IR = "IR",IS = "IS",IT = "IT",JE = "JE",JM = "JM",JO = "JO",JP = "JP",KE = "KE",KG = "KG",KH = "KH",KI = "KI",KM = "KM",KN = "KN",KR = "KR",KW = "KW",KY = "KY",KZ = "KZ",LA = "LA",LB = "LB",LC = "LC",LI = "LI",LK = "LK",LR = "LR",LS = "LS",LT = "LT",LU = "LU",LV = "LV",LY = "LY",MA = "MA",MC = "MC",MD = "MD",ME = "ME",MF = "MF",MG = "MG",MH = "MH",MK = "MK",ML = "ML",MM = "MM",MN = "MN",MO = "MO",MP = "MP",MQ = "MQ",MR = "MR",MS = "MS",MT = "MT",MU = "MU",MV = "MV",MW = "MW",MX = "MX",MY = "MY",MZ = "MZ",NA = "NA",NC = "NC",NE = "NE",NF = "NF",NG = "NG",NI = "NI",NL = "NL",NO = "NO",NP = "NP",NR = "NR",NU = "NU",NZ = "NZ",OM = "OM",PA = "PA",PE = "PE",PF = "PF",PG = "PG",PH = "PH",PK = "PK",PL = "PL",PM = "PM",PN = "PN",PR = "PR",PS = "PS",PT = "PT",PW = "PW",PY = "PY",QA = "QA",RE = "RE",RO = "RO",RS = "RS",RU = "RU",RW = "RW",SA = "SA",SB = "SB",SC = "SC",SD = "SD",SE = "SE",SG = "SG",SH = "SH",SI = "SI",SJ = "SJ",SK = "SK",SL = "SL",SM = "SM",SN = "SN",SO = "SO",SR = "SR",ST = "ST",SV = "SV",SX = "SX",SY = "SY",SZ = "SZ",TC = "TC",TD = "TD",TF = "TF",TG = "TG",TH = "TH",TJ = "TJ",TK = "TK",TL = "TL",TM = "TM",TN = "TN",TO = "TO",TR = "TR",TT = "TT",TV = "TV",TW = "TW",TZ = "TZ",UA = "UA",UG = "UG",UM = "UM",US = "US",UY = "UY",UZ = "UZ",VA = "VA",VC = "VC",VE = "VE",VG = "VG",VI = "VI",VN = "VN",VU = "VU",WF = "WF",WS = "WS",YE = "YE",YT = "YT",ZA = "ZA",ZM = "ZM",ZW = "ZW"
            }
            //TODO : replace most of enum by enumOrRegex => Yup( test : if (isEnumValue) =>OK else if( isRegex) => OK else => KO ) 


        export type DateStr = string;
        //export type DateStr ="(^((19|[2-9][0-9])\\d\\d[-]((0[1-9]|1[012])[-](0[1-9]|1[0-9]|2[0-8]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))$)|(^(19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)[-]02[-]29$)"

    
            export interface Embed {
                iframeUrl: string;
                flashUrl?: string; //XXX-Add : notRequired
                width: number;
                height: number;
                flashSecureUrl?: string; //XXX-Add : notRequired
            }
            

  
    export interface Cards {
        cardCollectionRenderer: CardCollectionRenderer;
    }
    
        export interface CardCollectionRenderer {
            cards?: Card[];
            headerText: HeaderText;
            icon: CloseButton;
            closeButton: CloseButton;
            trackingParams: string;
            allowTeaserDismiss: boolean;
            logIconVisibilityUpdates: boolean;
        }
    
            export interface Card {
                cardRenderer: CardRenderer;
            }
            
                export interface CardRenderer {
                    teaser: Teaser;
                    cueRanges?: CueRange[];
                    trackingParams: string;
                }

                
                    export interface Teaser {
                        simpleCardTeaserRenderer: SimpleCardTeaserRenderer;
                    }
                    
                        export interface SimpleCardTeaserRenderer {
                            message: HeaderText;
                            trackingParams: string;
                            prominent: boolean;
                            logVisibilityUpdates: boolean;
                            onTapCommand: OnTapCommandClass;
                        }
                    
                    export interface CueRange {
                        startCardActiveMs: string;
                        endCardActiveMs: string;
                        teaserDurationMs: string;
                        iconAfterTeaserMs: string;
                    }
      
                      
            export interface CloseButton {
                infoCardIconRenderer: VeData;
            }
            
                export interface VeData {
                    trackingParams: string;
                }
               
    export interface AdSlotsEntity {
        adSlotRenderer:AdSlotRender ; 
    }

        export interface AdSlotRender {
            adSlotMetadata : AdSlotMetadata ;
            fulfillmentContent : FulfillmentContent ;
            slotEntryTrigger : SlotEntryTrigger ;
            slotFulfillmentTriggers : SlotFulfillmentTriggers[] ;
            slotExpirationTriggers : SlotExpirationTriggers[] ;
        }

            export interface AdSlotMetadata {
                slotId : string ;
                slotType : SlotType ;
                adSlotLoggingData : AdSlotLoggingData ;
                triggerEvent: SlotEventTriggerType;
            }

                export enum SlotType {
                    SLOT_TYPE_PLAYER_BYTES = "SLOT_TYPE_PLAYER_BYTES",
                }

                export interface AdSlotLoggingData {
                    serializedSlotAdServingDataEntry : string ;
                }

                export enum SlotEventTriggerType {
                    SLOT_TRIGGER_EVENT_BEFORE_CONTENT ="SLOT_TRIGGER_EVENT_BEFORE_CONTENT"
                }

            export interface FulfillmentContent {
                fulfilledLayout : FulfilledLayout ;
            }

                export interface FulfilledLayout {
                    playerBytesAdLayoutRenderer : TopPlayerBytesAdLayoutRenderer ;
                }

                    export interface TopPlayerBytesAdLayoutRenderer {
                        adLayoutMetadata : AdLayoutMetadata ;
                        renderingContent : TopRenderingContent ;
                        layoutExitNormalTriggers : LayoutExitNormalTriggers[] ;
                        layoutExitSkipTriggers : LayoutExitSkipTriggers[] ;
                        layoutExitMuteTriggers : LayoutExitMuteTriggers[] ;
                    }

                        export interface AdLayoutMetadata {
                            layoutId : string ;
                            layoutType : LayoutType ;
                            adLayoutLoggingData: AdLayoutLoggingData;
                        }
                            export enum LayoutType {
                                LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES ="LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES",
                                LAYOUT_TYPE_MEDIA ="LAYOUT_TYPE_MEDIA"
                            }
                            export interface AdLayoutLoggingData {
                                serializedAdServingDataEntry : string ;
                            }

                        export interface TopRenderingContent {
                            playerBytesSequentialLayoutRenderer : PlayerBytesSequentialLayoutRenderer ;
                            instreamVideoAdRenderer ?: InstreamVideoAdRenderer ;
                        }
                            export interface PlayerBytesSequentialLayoutRenderer {
                                sequentialLayouts : SequentialLayoutEntity[] ;
                            }

                                export interface SequentialLayoutEntity {
                                    playerBytesAdLayoutRenderer : PlayerBytesAdLayoutRenderer ;
                                }

                                    export interface PlayerBytesAdLayoutRenderer {
                                        adLayoutMetadata : AdLayoutMetadata ;
                                        renderingContent : RenderingContent ;
                                    }

                                        export interface RenderingContent {
                                            //playerBytesAdLayoutRenderer : PlayerBytesAdLayoutRenderer ;
                                            instreamVideoAdRenderer ?: InstreamVideoAdRenderer ;
                                        }

                                        /*export interface PlayerBytesAdLayoutRenderer {
                                            adLayoutMetadata : AdLayoutMetadata ;
                                        }*/


                            export interface InstreamVideoAdRenderer {
                                skipOffsetMilliseconds : number ;
                                pings : Pings ;
                                clickthroughEndpoint : CunningCommand ;
                                csiParameters : CsiParameterEntity[] ;
                                playerVars : string ;
                                elementId : string ;
                                trackingParams : string ;
                                legacyInfoCardVastExtension : string ;
                                sodarExtensionData : SodarExtensionData ;
                                externalVideoId : string ;
                                adLayoutLoggingData : AdLayoutLoggingData ;
                                layoutId : string ;
                            }

                                export interface Pings {
                                    impressionPings : URL[] ;
                                    errorPings : URL[] ;
                                    mutePings : URL[] ;
                                    unmutePings : URL[] ;
                                    pausePings : URL[] ;
                                    rewindPings : URL[] ;
                                    resumePings : URL[] ;
                                    skipPings : URL[] ;
                                    closePings: URL[] ;
                                    progressPings : AtrURLNotMedia[] ;
                                    fullscreenPings : URL[] ;
                                    activeViewViewablePings : URL[] ;
                                    endFullscreenPings : URL[] ;
                                    activeViewMeasurablePings : URL[] ;
                                    abandonPings : URL[] ;
                                    activeViewFullyViewableAudibleHalfDurationPings : URL[] ;
                                    completePings : URL[] ;
                                    activeViewTracking : ActiveViewTrackingEntity ;
                                }

                                    export interface ActiveViewTrackingEntity {
                                        trafficType : TrafficType ;
                                    }

                                        export enum TrafficType {
                                            ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO ="ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO"
                                        }


                                export interface CsiParameterEntity {
                                    key : string ;
                                    value : string ;
                                }

                                export interface SodarExtensionData {
                                    siub : string ;
                                    bgub : string ;
                                    scs : string ;
                                    bgp : string ;
                                }

                        export interface LayoutExitNormalTriggers {
                            id : string ;
                            onLayoutSelfExitRequestedTrigger : RequestTriggeringLayoutId ;
                        }
                            export interface RequestTriggeringLayoutId {
                                triggeringLayoutId : string ;
                            }

                        export interface LayoutExitSkipTriggers {
                            id : string ;
                            skipRequestedTrigger : RequestTriggeringLayoutId ;
                        }

                        export interface LayoutExitMuteTriggers {
                            id :string ;
                            skipRequestedTrigger : RequestTriggeringLayoutId ;
                        }

            export interface SlotEntryTrigger {
                id : string ;
                beforeContentVideoIdStartedTrigger : any ; // A FAIRE : '{}' is valid as this object  
            }

            export interface SlotFulfillmentTriggers {
                id :string;
                slotIdEnteredTrigger : SlotIdTrigger ;
            }
                export interface SlotIdTrigger {
                    triggeringSlotId: string ;
                }

            export interface SlotExpirationTriggers {
                id :string ;
                //one of 
                slotIdExitedTrigger ?: SlotIdTrigger ; 
                onNewPlaybackAfterContentVideoIdTrigger ?: any ; // A FAIRE : '{}' is valid as this object
            }

    export interface Attestation {
        playerAttestationRenderer: PlayerAttestationRenderer;
    }
    
        export interface PlayerAttestationRenderer {
            challenge: string;
            botguardData: BotguardData;
        }
            
            export interface BotguardData {
                program: string;
                interpreterSafeUrl: InterpreterSafeURL;
                serverEnvironment: number;
            }
                
                export interface InterpreterSafeURL {
                    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
                }


    export interface MessagesEntity {
        mealbarPromoRenderer?: MealbarPromoRenderer 
        tooltipRenderer?: TooltipRenderer 
    }
        export interface MealbarPromoRenderer {
            icon: ThumbnailOrWatermarkOrIconOrImage
            messageTexts?:Subtitle
            actionButton: ActionButton
            dismissButton: A11YSkipNavigationButtonButtonRenderer
            triggerCondition: string
            style: string
            trackingParams: string
            impressionEndpoints?:CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand[]
            isVisible: boolean
            messageTitle: Subtitle
        }
    
            export interface CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand {
                clickTrackingParams: string
                commandMetadata: CommandMetadata2//AddToWatchLaterCommandCommandMetadata
                feedbackEndpoint: FeedbackEndpoint
            }

            export interface CommandMetadata2 {
                webCommandMetadata: WebCommandMetadata2
            }
                export interface WebCommandMetadata2 {
                    sendPost: boolean
                    apiUrl: string
                }
    
        export interface TooltipRenderer {
            promoConfig: PromoConfig
            targetId: string
            text: Subtitle
            detailsText: Subtitle
            dismissButton: DismissButton
            suggestedPosition: SuggestedPositionOrDismissStrategy
            dismissStrategy: SuggestedPositionOrDismissStrategy
            dwellTimeMs: string
            trackingParams: string
        }
            export interface PromoConfig {
                promoId: string
                impressionEndpoints?:CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand[]
                acceptCommand: CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand
                dismissCommand: CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand
            }
            export interface DismissButton {
                buttonRenderer: ButtonRenderer4
            }
                export interface ButtonRenderer4 {
                    size: SizeTypeEnum
                    text: Subtitle
                    trackingParams: string
                    command: Command1
                }
                        export interface Command1 {
                            clickTrackingParams: string
                            commandExecutorCommand: CommandExecutorCommand1
                        }
                        export interface CommandExecutorCommand1 {
                            commands?: CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand[];
                        }
                
            export interface SuggestedPositionOrDismissStrategy {
                type: string
            }

    export interface Endscreen {
        endscreenRenderer: EndscreenRenderer
    }
        export interface EndscreenRenderer {
            elements?: ElementsEntity[] 
            startMs: string
            trackingParams: string
        }
            export interface ElementsEntity {
                endscreenElementRenderer: EndscreenElementRenderer
            }
                export interface EndscreenElementRenderer {
                    style: string
                    image: ThumbnailOrWatermarkOrIconOrImage
                    icon?: ThumbnailOrWatermarkOrIconOrImage 
                    left: number
                    width: number
                    top: number
                    aspectRatio: number
                    startMs: string
                    endMs: string
                    title: TitleOrText
                    metadata?: HeaderText //XXX-Add : notRequired
                    callToAction?: HeaderText  //XXX-Add : notRequired
                    dismiss?: HeaderText //XXX-Add : notRequired
                    endpoint: Endpoint
                    hovercardButton?: SubscribeButton 
                    trackingParams: string
                    isSubscribe?: boolean 
                    id: string
                    thumbnailOverlays?: PlayerOverlayAutoplayRendererThumbnailOverlay[] 
                }

                    export interface TitleOrText { // A FAIRE  
                        accessibility: DisabledAccessibilityData
                        simpleText: string
                    }

                    export interface Endpoint {
                        clickTrackingParams: string
                        commandMetadata: EndpointCommandMetadata
                        browseEndpoint?: BrowseEndpoint
                        watchEndpoint?: WatchEndpoint 
                    }


//TODO : Yup validator : 
    export interface AdPlacementsEntity {
        adPlacementRenderer: AdPlacementRenderer
    }
        export interface AdPlacementRenderer {
            config: Config
            renderer: AdPlacementRendererRenderer
            adSlotLoggingData: AdSlotLoggingData
        }
            export interface Config {
                adPlacementConfig: AdPlacementConfig
            }
                export interface AdPlacementConfig {
                    kind: ConfigKind
                    adTimeOffset?: AdTimeOffset
                    hideCueRangeMarker?: boolean
                }
                    export enum ConfigKind {
                        AD_PLACEMENT_KIND_END="AD_PLACEMENT_KIND_END",
                        AD_PLACEMENT_KIND_START="AD_PLACEMENT_KIND_START",
                        AD_PLACEMENT_KIND_SELF_START="AD_PLACEMENT_KIND_SELF_START",
                    }

                    export interface AdTimeOffset {
                        offsetStartMilliseconds: string
                        offsetEndMilliseconds: string
                    }
    
            export interface AdPlacementRendererRenderer {
                adBreakServiceRenderer?: AdBreakServiceRenderer; 
                linearAdSequenceRenderer ?: LinearAdSequenceRenderer;
                actionCompanionAdRenderer ?: ActionCompanionAdRenderer;
            }

                export interface LinearAdSequenceRenderer {
                    linearAds : LinearAd[];
                }

                    export interface LinearAd {
                        instreamVideoAdRenderer : LinearAdInstreamVideoAdRenderer;
                    }

                    export interface LinearAdInstreamVideoAdRenderer {
                        playerOverlay : LinearAdPlayerOverlay;
                        trackingParams : string;
                        layoutId : string;
                        associatedPlayerBytesLayoutId: string;
                    }
                        export interface LinearAdPlayerOverlay {
                            instreamAdPlayerOverlayRenderer : InstreamAdPlayerOverlayRenderer;
                        }

                            export interface InstreamAdPlayerOverlayRenderer {
                                skipOrPreviewRenderer : SkipOrPreviewRenderer;
                                trackingParams : string;
                                visitAdvertiserRenderer : VisitAdvertiserRenderer;
                                adBadgeRenderer : AdBadgeRenderer;
                                adDurationRemaining : AdDurationRemaining;
                                adInfoRenderer: AdInfoRenderer;
                                flyoutCtaRenderer : FlyoutCtaRenderer;
                                adLayoutLoggingData: AdLayoutLoggingData;
                                elementId: string;
                                inPlayerSlotId : string;
                                inPlayerLayoutId : string;
                            }

                                export interface SkipOrPreviewRenderer {
                                    skipAdRenderer: SkipAdRenderer;
                                }

                                    export interface SkipAdRenderer {
                                        preskipRenderer : PreskipRenderer;
                                        skippableRenderer : SkippableRenderer;
                                        trackingParams : string;
                                        skipOffsetMilliseconds : number;
                                    }

                                        export interface PreskipRenderer {
                                            adPreviewRenderer:  AdPreviewRenderer;
                                        }

                                            export interface AdPreviewRenderer {
                                                thumbnail : AdPreviewRendererThumbnail;
                                                trackingParams : string;
                                                durationMilliseconds: number;
                                                templatedCountdown : TemplatedCountdown;
                                            }
                                                export interface AdPreviewRendererThumbnail {
                                                    thumbnail : BackgroundClass;
                                                    trackingParams : string;
                                                }

                                            export interface TemplatedCountdown {
                                                templatedAdText: TemplatedAdTextReamining;
                                            }

                                                export interface TemplatedAdTextReamining {
                                                    text: string ; // A FAIRE : enum : "{TIME_REMAINING}" "{FORMATTED_AD_DURATION_REMAINING}"
                                                    isTemplated : boolean;
                                                    trackingParams :string ; 
                                                }

                                                export interface TemplatedAdText{
                                                    text: string ; // A FAIRE : enum :  Sponsorisé (1 sur 2)
                                                    isTemplated : boolean;
                                                    trackingParams :string ;
                                                }

                                        export interface SkippableRenderer {
                                            skipButtonRenderer : SkipButtonRenderer;
                                        }

                                            export interface SkipButtonRenderer {
                                                message : ButtonRendererMessage;
                                                trackingParams : string;
                                            }
                                                export interface ButtonRendererMessage {
                                                    text : ButtonRendererMessageText.enum_type ;
                                                    isTemplated:boolean;
                                                    trackingParams : string;
                                                }


                                                    export namespace ButtonRendererMessageText {

                                                        export enum enum_type {
                                                            SkipAds = "SkipAds",
                                                            SkipAd = "SkipAd",
                                                        }

                                                        export const def_lang = ["en","fr","jap"] as const 
                                                                                                                                                                                                        
                                                        const  arr_regex_field = [] as const 
                                                        
                                                        const arr_regex_values = [] as const 

                                                        const fr_trad_arr = ["Passer les annonces","Ignorer l'annonce"] as const 
                                                        const jap_trad_arr = [ "広告をスキップ","広告スキップ"] as const   // A Verifier pour le second 
                                                        const en_trad_arr = [ "Skip Ads","Skip Ad"] as const 

                                                        const arrTrad = [en_trad_arr,fr_trad_arr , jap_trad_arr] as const 
                            
                                                        export const provider = new CTraductionEnum< typeof def_lang  , enum_type ,typeof arr_regex_field , typeof arr_regex_values , typeof arrTrad>(enum_type as any ,def_lang,arr_regex_field,arr_regex_values,arrTrad)

                                                    }
                                                
                                export interface VisitAdvertiserRenderer {
                                    buttonRenderer: StickyButtonRenderer2;
                                }
                                    export interface StickyButtonRenderer2 { // A FAIRE merge with StickyButtonRenderer //serviceEndpoint: ServiceEndpointClass;//XXX
                                        style: ButtonRendererStyle;//XXX
                                        text: HeaderText;//XXX
                                        icon: Icon;//XXX
                                        trackingParams: string;//XXX
                                        navigationEndpoint : NavigationEndpoint1;
                                    }

                                        export interface NavigationEndpoint1 {
                                            clickTrackingParams : string;
                                            commandMetadata :EndpointCommandMetadata;
                                            urlEndpoint : CommandURLEndpoint;
                                        }

                                export interface AdBadgeRenderer {
                                    simpleAdBadgeRenderer : SimpleAdBadgeRenderer;
                                }
                                    export interface SimpleAdBadgeRenderer {
                                        text:TemplatedAdText;
                                        trackingParams: string;
                                    }
                                export interface AdDurationRemaining {
                                    adDurationRemainingRenderer: AdDurationRemainingRenderer;
                                }
                                    export interface AdDurationRemainingRenderer {
                                        templatedCountdown : TemplatedCountdown;
                                        trackingParams: string;
                                    }
                                export interface AdInfoRenderer {
                                    adHoverTextButtonRenderer: AdHoverTextButtonRenderer;
                                }
                                    export interface AdHoverTextButtonRenderer {
                                        button: StickyButton3;
                                        hoverText:HeaderText;
                                        trackingParams: string;
                                    }

                                        export interface StickyButton3 {
                                            buttonRenderer : StickyButtonRenderer3;
                                        }
                                            export interface StickyButtonRenderer3 {
                                                style : ButtonRendererStyle;
                                                size: SizeTypeEnum;//XXX
                                                isDisabled: boolean;//XXX
                                                //text: Subtitle;//XXX
                                                serviceEndpoint: StunningAction;//XXX
                                                navigationEndpoint: StunningAction;
                                                icon: Icon;//XXX
                                                trackingParams: string;//XXX
                                                accessibilityData: DisabledAccessibilityData;//XXX
                                            }

                                                export interface StunningAction {
                                                    clickTrackingParams : string;
                                                    openPopupAction : FabulousOpenPopupAction;
                                                }
                                                    export interface FabulousOpenPopupAction {
                                                        popup : GoofyPopup;
                                                        popupType : PopupType;
                                                    }
                                                        export interface GoofyPopup {
                                                            aboutThisAdRenderer : AboutThisAdRenderer;
                                                        }
                                                            export interface AboutThisAdRenderer {
                                                                url :InterpreterSafeURL ;
                                                                trackingParams : string;
                                                            }

                                export interface FlyoutCtaRenderer {
                                    flyoutCtaRenderer : FlyoutCtaRendererFlyoutCta;
                                }
                                    export interface FlyoutCtaRendererFlyoutCta {
                                        image: ThumbnailThumbnails;
                                        headline:TemplatedAdText;
                                        description:Description;
                                        actionButton : ActionButtonRenderer;
                                        startMs:number;
                                        trackingParams : string;
                                    }
                
                                        export interface ThumbnailThumbnails {
                                            thumbnails: Thumbnail[];
                                            trackingParams: string;
                                        } 
                                        export interface ActionButtonRenderer {
                                            buttonRenderer : StickyButtonRenderer4;
                                        }

                                        export interface StickyButtonRenderer4 {
                                            text:HeaderText;
                                            navigationEndpoint: NavigationEndpoint1;
                                            trackingParams : string;
                                        }
                                        export interface Description {
                                            text: string;
                                            trackingParams: string;
                                        }
                                        
        
                    export interface AdBreakServiceRenderer {
                        prefetchMilliseconds: string
                        getAdBreakUrl: string
                    }
    
                export interface ActionCompanionAdRenderer {
                    headline:TemplatedAdText;
                    description:Description;
                    actionButton:ActionButtonRenderer;
                    iconImage:ThumbnailThumbnails;
                    bannerImage:ThumbnailThumbnails;
                    navigationEndpoint:NavigationEndpoint1;
                    trackingParams:string;
                    adInfoRenderer:AdInfoRenderer;
                    adVideoId:string;
                    impressionPings:URL[];
                    adLayoutLoggingData:AdLayoutLoggingData;
                    isContentVideoCompanion?:boolean;
                    associatedCompositePlayerBytesLayoutId:string;
                    adBadge:AdBadge;
                }

                    export interface AdBadge {
                        metadataBadgeRenderer : MetadataBadgeRenderer;
                    }

                        export interface MetadataBadgeRenderer {
                            style : BadgeStyle;
                            label :string;
                            trackingParams : string;
                        }
                            
                                export enum BadgeStyle {
                                    BADGE_STYLE_TYPE_AD ="BADGE_STYLE_TYPE_AD"
                                }
                
    export interface PlayerResponseFrameworkUpdates {
    entityBatchUpdate: EntityBatchUpdate;
  }

//--------------------------------------------------------------------

  export interface SortMenu {
    sortFilterSubMenuRenderer: SortMenuSortFilterSubMenuRenderer;
  }
  
    export interface SortMenuSortFilterSubMenuRenderer {
        subMenuItems: SubMenuItem[];
        title: string;
        icon: Icon;
        accessibility: DisabledAccessibilityData;
        tooltip: string;
        trackingParams: string;
    }


//--------------------------------------------------------------------

  
export interface CreateRenderer {
    commentSimpleboxRenderer: CommentSimpleboxRenderer;
}
  
    export interface CommentSimpleboxRenderer {
        submitButton: A11YSkipNavigationButtonClass;
        cancelButton: A11YSkipNavigationButtonClass;
        authorThumbnail: Avatar;
        placeholderText: Subtitle;
        trackingParams: string;
        avatarSize: string;
        emojiButton: EmojiButton;
        emojiPicker: EmojiPicker;
        aadcGuidelinesStateEntityKey: AadcGuidelinesStateEntityKey;
    }

  
//--------------------------------------------------------------------

export interface CustomEmoji {
    emojiId: string;
    shortcuts: string[];
    searchTerms: string[];
    image: Avatar;
    isCustomEmoji: boolean;
    index: number;
  }


//--------------------------------------------------------------------
  
/*
  
export interface  {
    clickTrackingParams: string;
    relatedChipCommand : RelatedChipCommand ; //change
    commandMetadata: AddToWatchLaterCommandCommandMetadata;
    continuationCommand: ContinuationEndpointContinuationCommand;
  }
  
    interface RelatedChipCommand { //add
        targetSectionIdentifier: string
        loadCached: boolean
    }

*/


//--------------------------------------------------------------------
