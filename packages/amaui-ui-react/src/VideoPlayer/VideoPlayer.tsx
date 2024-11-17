import React from 'react';

import { clamp, getLeadingZerosNumber, is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import { AmauiDate, duration as durationMethod } from '@amaui/date';

import IconMaterialPlayArrow from '@amaui/icons-material-rounded-react/IconMaterialPlayArrowW100';
import IconMaterialPause from '@amaui/icons-material-rounded-react/IconMaterialPauseW100';
import IconMaterialForwardMedia from '@amaui/icons-material-rounded-react/IconMaterialForwardMediaW100';
import IconMaterialVolumeDownAlt from '@amaui/icons-material-rounded-react/IconMaterialVolumeDownAltW100';
import IconMaterialVolumeOff from '@amaui/icons-material-rounded-react/IconMaterialVolumeOffW100';
import IconMaterialFullscreen from '@amaui/icons-material-rounded-react/IconMaterialFullscreenW100';
import IconMaterialFullscreenExit from '@amaui/icons-material-rounded-react/IconMaterialFullscreenExitW100';
import IconMaterialSettings from '@amaui/icons-material-rounded-react/IconMaterialSettingsW100';
import IconMaterialTune from '@amaui/icons-material-rounded-react/IconMaterialTuneW100';
import IconMaterialSlowMotionVideo from '@amaui/icons-material-rounded-react/IconMaterialSlowMotionVideoW100';
import IconMaterialPictureInPictureAlt from '@amaui/icons-material-rounded-react/IconMaterialPictureInPictureAltW100';
import IconMaterialArrowBackIos from '@amaui/icons-material-rounded-react/IconMaterialArrowBackIosW100';

import LineElement from '../Line';
import SurfaceElement from '../Surface';
import SliderElement from '../Slider';
import IconButtonElement from '../IconButton';
import ExpandElement from '../Expand';
import TypeElement from '../Type';
import MenuElement from '../Menu';
import ListItemElement from '../ListItem';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { ITonal, IColor, ISize, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative'
  },

  wrapper: {
    position: 'relative',
    borderRadius: 'inherit'
  },

  wrapperFullScreen: {
    height: '100vh',
    width: '100vw'
  },

  video: {
    background: 'black',
    flex: '1 1 auto',
    borderRadius: 'inherit',
    cursor: 'pointer',
    userSelect: 'none'
  },

  size_small: {
    borderRadius: theme.methods.shape.radius.value(0.5, 'px')
  },

  size_regular: {
    borderRadius: theme.methods.shape.radius.value(1.5, 'px')
  },

  size_large: {
    borderRadius: theme.methods.shape.radius.value(2, 'px')
  },

  fullScreen: {
    borderRadius: '0px'
  },

  controls: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
    borderRadius: 'inherit',
    transition: theme.methods.transitions.make('opacity'),

    '&.amaui-Surface-root': {
      background: 'linear-gradient(0deg, rgb(0, 0, 0, 0.24), transparent)'
    }
  },

  controlsHiddden: {
    opacity: 0,
    pointerEvents: 'none'
  },

  controlsFullScreen: {

  },

  controls_size_small: {
    padding: `${theme.methods.space.value(0.75, 'px')} ${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(0.5, 'px')}`
  },

  controls_size_regular: {
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1, 'px')}`
  },

  controls_size_large: {
    padding: `${theme.methods.space.value(2.25, 'px')} ${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(1.5, 'px')}`
  },

  wrapperTimeline: {
    padding: `0 ${theme.methods.space.value(1.5, 'px')}`
  },

  timeline: {
    '&.amaui-Slider-root': {
      height: '20px !important',
      width: '100% !important',
      margin: 'unset !important',
      maxWidth: 'unset !important'
    }
  },

  volume: {
    flex: '1 1 auto',

    '&.amaui-Slider-root': {
      height: '24px !important',
      width: '100vw !important',
      maxWidth: '54px !important',
      margin: 'unset !important',
      borderRadius: '0px',

      '& .amaui-Slider-rail': {
        borderRadius: '0px'
      },

      '& .amaui-Slider-track': {
        borderRadius: '0px'
      }
    }
  },

  volumeExpand: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },

  time: {
    cursor: 'default',
    userSelect: 'none'
  },

  menuSettings: {
    maxHeight: 194,
    overflowY: 'auto'
  },

  endControls: {
    position: 'relative'
  },

  placeholder: {

  },

  bottomControls: {
    scrollbarWidth: 'none',
    overflow: 'auto hidden',

    '& > *': {
      flex: '0 0 auto'
    },

    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },

  menuSettingsFullScreen: {
    '&.amaui-Modal-root': {
      position: 'fixed !important',
      transform: 'none !important',
      left: 'unset !important',
      right: '12px !important',
      bottom: '47.8906px !important'
    }
  }
}), { name: 'amaui-VideoPlayer' });

export interface IVideoPlayer extends ILine {
  name?: string;
  src?: string;
  mime?: string;
  meta?: any;
  versions?: any;
  thumbnails?: any;
  duration?: number;

  tonal?: ITonal;
  color?: IColor;
  size?: ISize;

  start?: any;
  end?: any;
  startControls?: any;
  endControls?: any;
  startButtons?: any;
  endButtons?: any;
  startEnd?: any;
  endEnd?: any;

  forward?: boolean;
  backward?: boolean;
  settings?: boolean;
  quality?: boolean;
  playbackSpeed?: boolean;
  pictureInPicture?: boolean;
  fullScreen?: boolean;

  startMediaSessionOnPlay?: boolean;

  disabled?: boolean;

  IconPlay?: IElementReference;
  IconPause?: IElementReference;
  IconForward?: IElementReference;
  IconBackward?: IElementReference;
  IconVolume?: IElementReference;
  IconVolumeMuted?: IElementReference;
  IconBack?: IElementReference;
  IconSettings?: IElementReference;
  IconQuality?: IElementReference;
  IconPlaybackSpeed?: IElementReference;
  IconPictureInPicture?: IElementReference;
  IconFullScreen?: IElementReference;
  IconFullScreenExit?: IElementReference;

  PlayButtonProps?: IPropsAny;
  ForwardButtonProps?: IPropsAny;
  BackwardButtonProps?: IPropsAny;
  VolumeButtonProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  TypeProps?: IPropsAny;
  TimelineProps?: IPropsAny;
  VolumeProps?: IPropsAny;
  SliderProps?: IPropsAny;
  SettingsButtonProps?: IPropsAny;
  SettingsMenuProps?: IPropsAny;
  QualityButtonProps?: IPropsAny;
  PictureInPictureButtonProps?: IPropsAny;
  FullScreenButtonProps?: IPropsAny;
}

const VideoPlayer: React.FC<IVideoPlayer> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiVideoPlayer?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Slider = React.useMemo(() => theme?.elements?.Slider || SliderElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Expand = React.useMemo(() => theme?.elements?.Expand || ExpandElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const {
    name,
    src,
    meta,
    versions,
    thumbnails,
    mime,

    duration: duration_,

    tonal = true,
    color,
    size = 'regular',

    start,
    end,
    startControls,
    endControls,
    startButtons,
    endButtons,
    startButtonsEnd,
    endButtonsEnd,

    forward,
    backward,
    settings = true,
    quality: quality_ = true,
    playbackSpeed: playbackSpeed_ = true,
    pictureInPicture: pictureInPicture_ = true,
    fullScreen: fullScreen_ = true,

    startMediaSessionOnPlay,

    disabled,

    IconPlay = IconMaterialPlayArrow,
    IconPause = IconMaterialPause,
    IconForward = IconMaterialForwardMedia,
    IconBackward = IconMaterialForwardMedia,
    IconVolume = IconMaterialVolumeDownAlt,
    IconVolumeMuted = IconMaterialVolumeOff,
    IconBack = IconMaterialArrowBackIos,
    IconSettings = IconMaterialSettings,
    IconQuality = IconMaterialTune,
    IconPlaybackSpeed = IconMaterialSlowMotionVideo,
    IconPictureInPicture = IconMaterialPictureInPictureAlt,
    IconFullScreen = IconMaterialFullscreen,
    IconFullScreenExit = IconMaterialFullscreenExit,

    PlayButtonProps,
    ForwardButtonProps,
    BackwardButtonProps,
    VolumeButtonProps,
    IconButtonProps,
    TypeProps,
    TimelineProps,
    VolumeProps,
    SliderProps,
    SettingsButtonProps,
    SettingsMenuProps,
    QualityButtonProps,
    PictureInPictureButtonProps,
    FullScreenButtonProps,

    className,

    Component,

    ...other
  } = props;

  const { classes } = useStyle();

  const [loaded, setLoaded] = React.useState(false);
  const [duration, setDuration] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(0);
  const [play, setPlay] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [volume, setVolume] = React.useState(1);
  const [volumeVisible, setVolumeVisible] = React.useState(false);
  const [updating, setUpdating] = React.useState<any>(false);
  const [mouseMoved, setMouseMoved] = React.useState<any>();
  const [quality, setQuality] = React.useState<any>();
  const [posterShow, setPosterShow] = React.useState(true);
  const [pictureInPicture, setPictureInPicture] = React.useState(false);
  const [fullScreen, setFullScreen] = React.useState(false);
  const [playbackSpeed, setPlaybackSpeed] = React.useState(1);
  const [openMenu, setOpenMenu] = React.useState<any>();

  const refs = {
    root: React.useRef<any>(),
    video: React.useRef<HTMLVideoElement>(),
    controls: React.useRef<any>(),
    duration: React.useRef<any>(),
    time: React.useRef<any>(),
    play: React.useRef<any>(),
    updating: React.useRef<any>(),
    onPlay: React.useRef<any>(),
    onPause: React.useRef<any>(),
    onTimeChange: React.useRef<any>(),
    onBackward: React.useRef<any>(),
    onForward: React.useRef<any>(),
    onStop: React.useRef<any>(),
    startMediaSession: React.useRef<any>(),
    updateMediaSession: React.useRef<any>(),
    startMediaSessionOnPlay: React.useRef<any>(),
    fullScreen: React.useRef(fullScreen),
    mouseMoved: React.useRef(mouseMoved),
    timeoutMouseMoved: React.useRef<any>()
  };

  refs.duration.current = duration;

  refs.time.current = time;

  refs.play.current = play;

  refs.updating.current = updating;

  refs.startMediaSessionOnPlay.current = startMediaSessionOnPlay;

  refs.fullScreen.current = fullScreen;

  refs.mouseMoved.current = mouseMoved;

  const allowedPictureInPicture = () => {
    if (isEnvironment('browser')) {
      const rootDocument = (refs.root.current?.ownerDocument || window.document) as Document;

      return rootDocument.pictureInPictureEnabled;
    }
  };

  const startMediaSession = React.useCallback(() => {
    if ('mediaSession' in navigator) {
      window.navigator.mediaSession.metadata = new MediaMetadata({
        title: name
      });

      const methods = [
        { name: 'play', method: refs.onPlay.current },
        { name: 'pause', method: refs.onPause.current },
        { name: 'previoustrack', method: () => { } },
        { name: 'nexttrack', method: () => { } },
        { name: 'seekbackward', method: refs.onBackward.current },
        { name: 'seekforward', method: refs.onForward.current },
        { name: 'seekto', method: (details: MediaSessionActionDetails) => refs.onTimeChange.current(details.seekTime) },
        { name: 'stop', method: refs.onStop.current }
      ];

      for (const method of methods) {
        try {
          window.navigator.mediaSession.setActionHandler(method.name as any, method.method);
        }
        catch (error) {
          console.log(`MediaSession action ${method.name}, is not supported`);
        }
      }
    }
  }, [name]);

  const updateMediaSession = React.useCallback(() => {
    if ('mediaSession' in navigator) {
      window.navigator.mediaSession.setPositionState({
        duration: refs.duration.current,
        playbackRate: 1,
        position: clamp(refs.time.current, 0, refs.duration.current)
      });
    }
  }, [name]);

  refs.startMediaSession.current = startMediaSession;

  refs.updateMediaSession.current = updateMediaSession;

  const durationTime = duration_ || meta?.duration;

  const onVolumeChange = React.useCallback((value: number) => {
    setVolume(value);

    refs.video.current!.volume = value;
  }, []);

  const onTimeChange = React.useCallback((value: number) => {
    setTime(value);

    refs.video.current!.currentTime = value;

    // update MediaSession
    refs.updateMediaSession.current();
  }, []);

  const onPlaybackSpeed = React.useCallback((value_: number) => {
    const value = clamp(value_, 0, 2);

    setPlaybackSpeed(value);

    setOpenMenu(null);

    refs.video.current!.playbackRate = value;
  }, []);

  const onForward = React.useCallback((details?: MediaSessionActionDetails) => {
    const part = refs.duration.current * 0.1;
    const toMove = clamp(details?.seekOffset || part, 1, refs.duration.current);

    const value = clamp(refs.time.current + toMove, 0, refs.duration.current);

    refs.onTimeChange.current(value);
  }, []);

  const onBackward = React.useCallback((details?: MediaSessionActionDetails) => {
    const part = refs.duration.current * 0.1;
    const toMove = clamp(details?.seekOffset || part, 1, refs.duration.current);

    const value = clamp(refs.time.current - toMove, 0, refs.duration.current);

    refs.onTimeChange.current(value);
  }, []);

  const onPlay = React.useCallback(() => {
    try {
      setPlay(true);

      refs.video.current!.play();

      // start MediaSession
      if (refs.startMediaSessionOnPlay.current) refs.startMediaSession.current();

      // update MediaSession
      refs.updateMediaSession.current();
    }
    catch (error) {
      console.error(`videoPlayer`, error);
    }
  }, []);

  const onPause = React.useCallback(() => {
    setPlay(false);

    refs.video.current!.pause();
  }, []);

  const onStop = React.useCallback(() => {
    setPlay(false);

    refs.video.current!.pause();

    refs.video.current!.currentTime = 0;
  }, []);

  const onMute = React.useCallback(() => {
    setMuted(true);

    refs.video.current!.muted = true;
  }, []);

  const onUnmute = React.useCallback(() => {
    setMuted(false);

    refs.video.current!.muted = false;
  }, []);

  refs.onPlay.current = onPlay;

  refs.onPause.current = onPause;

  refs.onTimeChange.current = onTimeChange;

  refs.onForward.current = onForward;

  refs.onBackward.current = onBackward;

  refs.onStop.current = onStop;

  const init = React.useCallback(() => {
    setLoaded(false);

    const video = refs.video.current as HTMLVideoElement;

    video.addEventListener('loadedmetadata', () => {
      const value = video!.duration;

      if (!is('number', durationTime) && is('number', value)) {
        setDuration(value);

        setLoaded(true);
      }
    });

    video.addEventListener('ended', () => {
      refs.onStop.current();
    });

    video.addEventListener('timeupdate', () => {
      const value = video.currentTime;

      if (!refs.updating.current && refs.time.current !== value) {
        setTime(value);

        // update MediaSession
        refs.updateMediaSession.current();
      }
    });

    video.addEventListener('ratechange', () => {
      const value = video.playbackRate;

      setPlaybackSpeed(value);
    });

    // start MediaSession
    startMediaSession();

    if (is('number', durationTime)) {
      setDuration(durationTime);

      setLoaded(true);
    }

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) as Document : undefined;

    const methodPictureInPicture = () => {
      if (rootDocument.pictureInPictureElement) {
        setPictureInPicture(true);
      }
      else {
        setPictureInPicture(false);
      }
    };

    const methodFullScreen = () => {
      if (rootDocument.fullscreenElement) {
        setFullScreen(true);
      }
      else {
        setFullScreen(false);
      }
    };

    const methodMouseMove = () => {
      if (refs.play.current) {
        clearTimeout(refs.timeoutMouseMoved.current);

        setMouseMoved({
          moved: true,
          unix: AmauiDate.unix
        });

        refs.timeoutMouseMoved.current = setTimeout(() => {
          setMouseMoved({
            moved: false,
            unix: AmauiDate.unix
          });
        }, 4000);
      }
    };

    refs.root.current?.addEventListener('mousemove', methodMouseMove);

    refs.root.current?.addEventListener('touchstart', methodMouseMove);

    refs.root.current?.addEventListener('touchmove', methodMouseMove);

    rootDocument.addEventListener('enterpictureinpicture', methodPictureInPicture);

    rootDocument.addEventListener('leavepictureinpicture', methodPictureInPicture);

    rootDocument.addEventListener('fullscreenchange', methodFullScreen);

    video.src = src;

    return () => {
      refs.root.current?.removeEventListener('mousemove', methodMouseMove);

      refs.root.current?.removeEventListener('touchstart', methodMouseMove);

      refs.root.current?.removeEventListener('touchmove', methodMouseMove);

      rootDocument.removeEventListener('enterpictureinpicture', methodPictureInPicture);

      rootDocument.removeEventListener('leavepictureinpicture', methodPictureInPicture);

      rootDocument.removeEventListener('fullscreenchange', methodFullScreen);
    };
  }, [src, durationTime, startMediaSession]);

  React.useEffect(() => {
    if (loaded) {
      let urlNew = src;

      if (quality) {
        if (quality?.meta?.resolution) urlNew += `?version=${quality?.meta?.resolution}`;
      }

      const currentTime = refs.video.current.currentTime;

      const playbackRate = refs.video.current.playbackRate;

      const playing = refs.play.current;

      // pause
      if (playing) refs.onPause.current();

      // poster remove
      setPosterShow(false);

      refs.video.current.poster = '';

      refs.video.current.src = urlNew;

      refs.video.current.load();

      refs.video.current.currentTime = currentTime;

      refs.video.current.playbackRate = playbackRate;

      // play
      if (playing) refs.onPlay.current();
    }
  }, [quality]);

  const onMouseEnter = React.useCallback(() => {
    setVolumeVisible(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setVolumeVisible(false);
  }, []);

  const onUpdating = React.useCallback(() => {
    setUpdating(refs.play.current ? 'play' : true);

    if (refs.play.current) onPause();
  }, [onPause]);

  const onUpdatingDone = React.useCallback(() => {
    const updatingPrevious = refs.updating.current;

    setUpdating(false);

    if (updatingPrevious === 'play') onPlay();
  }, [onPlay]);

  const onFullScreen = React.useCallback(async () => {
    const root = refs.root.current;

    try {
      if (root.requestFullscreen) await root.requestFullscreen();
      else if ((root as any).webkitRequestFullscreen) await (root as any).webkitRequestFullscreen();
      else if ((root as any).msRequestFullscreen) await (root as any).msRequestFullscreen();
    }
    catch (error) { }
  }, []);

  const onFullScreenExit = React.useCallback(async () => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    try {
      if (rootDocument.exitFullscreen) await rootDocument.exitFullscreen();
      else if ((rootDocument as any).webkitExitFullscreen) await (rootDocument as any).webkitExitFullscreen();
      else if ((rootDocument as any).msExitFullscreen) await (rootDocument as any).msExitFullscreen();
    }
    catch (error) { }
  }, []);

  const onPictureInPicture = React.useCallback(async () => {
    const video = refs.video.current as HTMLVideoElement;

    try {
      if (video.requestPictureInPicture) await video.requestPictureInPicture();
      else if ((video as any).webkitRequestPictureInPicture) await (video as any).webkitRequestPictureInPicture();
      else if ((video as any).msRequestPictureInPicture) await (video as any).msRequestPictureInPicture();
    }
    catch (error) { }
  }, []);

  const onPictureInPictureExit = React.useCallback(async () => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) as Document : undefined;

    try {
      if (rootDocument.exitPictureInPicture) await rootDocument.exitPictureInPicture();
      else if ((rootDocument as any).webkitExitPictureInPicture) await (rootDocument as any).webkitExitPictureInPicture();
      else if ((rootDocument as any).msExitPictureInPicture) await (rootDocument as any).msExitPictureInPicture();
    }
    catch (error) { }
  }, []);

  const onVideoClick = React.useCallback((event: any) => {
    if (event.detail === 1) {
      !play ? onPlay() : onPause();
    }

    if (event.detail === 2) {
      !fullScreen ? onFullScreen() : onFullScreenExit();
    }
  }, [play, fullScreen, onPlay, onPause, onFullScreen, onFullScreenExit]);

  React.useEffect(() => {
    // init
    init();
  }, [src]);

  const durationToValue = (item: any) => {
    let value = '';

    const separator = ':';

    if (item.hour) value += `${getLeadingZerosNumber(item.hour, { leadingZeros: 0 })}`;

    if (item.minute) {
      if (value) value += separator;

      value += `${getLeadingZerosNumber(item.minute, { leadingZeros: 0 })}`;
    }
    else {
      if (value) value += separator;

      value += '0';
    }

    if (item.second) {
      if (value) value += separator;

      value += `${getLeadingZerosNumber(item.second, { leadingZeros: 1 })}`;
    }
    else {
      if (value) value += separator;

      value += '00';
    }

    return value;
  };

  const onQuality = React.useCallback((version: any) => {
    setQuality(version);

    setOpenMenu(null);
  }, []);

  const onSettingsMenuClose = React.useCallback(() => {
    setOpenMenu(null);
  }, []);

  const getSettingsMenuItems = () => {
    const itemProps: any = {
      button: true,
      startAlign: 'center',
      endAlign: 'center',
      size: 'small',
      className: 'amaui-videoPlayer-option'
    };

    const items: any = [];

    if (openMenu) {
      items.push(
        <ListItem
          key='back'

          start={(
            <IconBack
              size='very small'
            />
          )}

          primary={(
            <Type
              version='b3'
            >
              Back
            </Type>
          )}

          onClick={() => setOpenMenu(null)}

          {...itemProps}
        />
      );
    }

    if (!openMenu) {
      if (playbackSpeed_) items.push(
        <ListItem
          key='playbackSpeed'

          start={(
            <IconPlaybackSpeed
              size='small'
            />
          )}

          primary={(
            <Type
              version='b3'
            >
              Playback speed
            </Type>
          )}

          end={(
            <Type
              version='b3'

              priority='secondary'
            >
              {playbackSpeed === 1 ? 'Normal' : playbackSpeed}
            </Type>
          )}

          onClick={() => setOpenMenu('playbackSpeed')}

          {...itemProps}
        />
      );

      if (quality_) items.push(
        <ListItem
          key='quality'

          start={(
            <IconQuality
              size='small'
            />
          )}

          primary={(
            <Type
              version='b3'
            >
              Quality
            </Type>
          )}

          end={(
            <Type
              version='b3'

              priority='secondary'
            >
              {!quality ? 'Original' : `${quality?.meta?.resolution}p`}
            </Type>
          )}

          onClick={() => setOpenMenu('quality')}

          {...itemProps}
        />
      );
    }
    else if (openMenu === 'quality') {
      items.push(
        <ListItem
          key='original'

          primary={(
            <Type
              version='b3'
            >
              {`${meta?.resolution}p (original)`}
            </Type>
          )}

          onClick={() => quality ? onQuality(null) : undefined}

          selected={!quality}

          {...itemProps}
        />
      );

      versions?.forEach((version: any, index: number) => {
        const isSelected = quality?.id === version?.id;

        items.push(
          <ListItem
            key={index}

            primary={(
              <Type
                version='b3'
              >
                {version?.meta?.resolution}p
              </Type>
            )}

            onClick={() => !isSelected ? onQuality(version) : undefined}

            selected={isSelected}

            {...itemProps}
          />
        );
      });
    }
    else if (openMenu === 'playbackSpeed') {
      const options = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

      options.forEach(option => {
        items.push(
          <ListItem
            key={option}

            primary={(
              <Type
                version='b3'
              >
                {option === 1 ? 'Normal' : option}
              </Type>
            )}

            onClick={() => onPlaybackSpeed(option)}

            selected={playbackSpeed === option}

            {...itemProps}
          />
        );
      });
    }

    return items;
  };

  const thumbnailsToUse = thumbnails || quality?.thumbnails;

  const thumbnail = thumbnailsToUse ? 1 : undefined;

  const typeProps: any = {
    version: size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3',

    ...TypeProps
  };

  const iconButtonProps: any = {
    version: 'text',
    size,
    disabled,

    ...IconButtonProps
  };

  const sliderProps: any = {
    color,
    size,
    disabled,

    ...SliderProps
  };

  let url = src;

  let poster: any;

  if (quality) {
    if (quality?.meta?.resolution) url += `?version=${quality?.meta?.resolution}`;
  }

  if (is('number', thumbnail)) {
    poster = `${url}${url?.includes('?') ? '&' : '?'}thumbnail=${thumbnail}`;
  }

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={1}

      direction='column'

      align='unset'

      justify='unset'

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('VideoPlayer', theme) && [
          `amaui-VideoPlayer-root`,
          `amaui-VideoPlayer-size-${size}`,
          fullScreen && `amaui-VideoPlayer-full-screen`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        fullScreen && classes.fullScreen
      ])}

      {...other}
    >
      <Line
        gap={0}

        direction='column'

        align='unset'

        justify='unset'

        fullWidth

        className={classNames([
          classes.wrapper,
          fullScreen && classes.wrapperFullScreen
        ])}
      >
        {start}

        <video
          ref={refs.video as any}

          onClick={onVideoClick}

          poster={posterShow ? poster : undefined}

          controls={false}

          className={classNames([
            classes.video,
            fullScreen && classes.videoFullScreen
          ])}
        >
          <source src={url} type={mime} />
        </video>

        <Surface
          ref={refs.controls}

          gap={0}

          fullWidth

          tonal={tonal}

          color={color !== undefined ? color : theme.palette.light ? 'inverted' : 'default'}

          Component={Line}

          className={classNames([
            classes.controls,
            classes[`controls_size_${size}`],
            fullScreen && classes.controlsFullScreen,
            !mouseMoved?.moved && play && classes.controlsHiddden
          ])}
        >
          {startControls}

          <Line
            fullWidth

            className={classes.wrapperTimeline}
          >
            <Slider
              value={time}

              onChange={onTimeChange}

              min={0}

              max={duration}

              onMouseDown={onUpdating}

              onTouchStart={onUpdating}

              onMouseUp={onUpdatingDone}

              onToucheEnd={onUpdatingDone}

              {...sliderProps}

              {...TimelineProps}

              className={classNames([
                sliderProps?.className,
                TimelineProps?.className,
                classes.timeline
              ])}
            />
          </Line>

          <Line
            direction='row'

            align='center'

            fullWidth

            onMouseLeave={onMouseLeave}

            className={classes.bottomControls}

            style={{
              color: theme.palette.color[color] ? theme.palette.color[color][90] : theme.palette.color.neutral[90]
            }}
          >
            {startButtons}

            <Line
              gap={1}

              direction='row'

              align='center'

              justify='space-between'

              flexNo

              fullWidth
            >
              <Line
                gap={1.5}

                direction='row'

                align='center'

                flexNo
              >
                <Line
                  gap={0}

                  direction='row'

                  align='center'
                >
                  <IconButton
                    onClick={play ? onPause : onPlay}

                    {...iconButtonProps}

                    {...PlayButtonProps}
                  >
                    {play ? <IconPause /> : <IconPlay />}
                  </IconButton>

                  {backward && (
                    <IconButton
                      onClick={onBackward}

                      {...iconButtonProps}

                      {...BackwardButtonProps}
                    >
                      <IconBackward
                        style={{
                          transform: 'rotateY(180deg)'
                        }}
                      />
                    </IconButton>
                  )}

                  {forward && (
                    <IconButton
                      onClick={onForward}

                      {...iconButtonProps}

                      {...ForwardButtonProps}
                    >
                      <IconForward

                      />
                    </IconButton>
                  )}

                  <IconButton
                    onClick={muted ? onUnmute : onMute}

                    onMouseEnter={onMouseEnter}

                    {...iconButtonProps}

                    {...VolumeButtonProps}
                  >
                    {!muted ? <IconVolume /> : <IconVolumeMuted />}
                  </IconButton>

                  <Expand
                    in={volumeVisible}

                    parent={refs.controls.current}

                    orientation='horizontal'

                    className={classes.volumeExpand}
                  >
                    <Slider
                      value={volume}

                      onChange={onVolumeChange}

                      min={0}

                      max={1}

                      orientation='horizontal'

                      {...sliderProps}

                      size={['small', 'regular'].includes(size) ? 'small' : 'regular'}

                      {...VolumeProps}

                      className={classNames([
                        sliderProps?.className,
                        VolumeProps?.className,
                        classes.volume
                      ])}
                    />
                  </Expand>
                </Line>

                <Line
                  gap={0.5}

                  direction='row'

                  align='center'

                  flexNo

                  className={classNames([
                    'amaui-Audio-time',
                    classes.time
                  ])}
                >
                  <Type
                    {...typeProps}
                  >
                    {durationToValue(durationMethod(time * 1000, false, true))}
                  </Type>

                  <Type
                    {...typeProps}
                  >
                    /
                  </Type>

                  <Type
                    {...typeProps}
                  >
                    {durationToValue(durationMethod(duration * 1000, false, true))}
                  </Type>
                </Line>
              </Line>

              <Line
                gap={0.5}

                direction='row'

                align='center'

                className={classes.endControls}
              >
                {startButtonsEnd}

                {settings && (
                  <Menu
                    menuItems={getSettingsMenuItems()}

                    position='top'

                    switch={false}

                    portal={!fullScreen}

                    onClose={onSettingsMenuClose}

                    includeParentQueries={['.amaui-videoPlayer']}

                    {...SettingsMenuProps}

                    ListProps={{
                      className: classNames([
                        SettingsMenuProps?.ListProps?.className,
                        classes.menuSettings,
                      ]),

                      size: 'small'
                    }}

                    className={classNames([
                      'amaui-videoPlayer',
                      SettingsMenuProps?.className,
                      fullScreen && classes.menuSettingsFullScreen
                    ])}
                  >
                    <IconButton
                      {...iconButtonProps}

                      {...SettingsButtonProps}
                    >
                      <IconSettings />
                    </IconButton>
                  </Menu>
                )}

                {pictureInPicture_ && allowedPictureInPicture() && (
                  <IconButton
                    onClick={!pictureInPicture ? onPictureInPicture : onPictureInPictureExit}

                    {...iconButtonProps}

                    {...PictureInPictureButtonProps}
                  >
                    <IconPictureInPicture />
                  </IconButton>
                )}

                {fullScreen_ && (
                  <IconButton
                    onClick={!fullScreen ? onFullScreen : onFullScreenExit}

                    {...iconButtonProps}

                    {...FullScreenButtonProps}
                  >
                    {fullScreen ? <IconFullScreenExit /> : <IconFullScreen />}
                  </IconButton>
                )}

                {endButtonsEnd}
              </Line>
            </Line>

            {endButtons}
          </Line>

          {endControls}
        </Surface>

        {end}
      </Line>
    </Line>
  );
});

VideoPlayer.displayName = 'amaui-VideoPlayer';

export default VideoPlayer;
