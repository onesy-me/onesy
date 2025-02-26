import React from 'react';

import { clamp, getLeadingZerosNumber, is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';
import { duration as durationMethod } from '@onesy/date';

import IconMaterialPlayArrow from '@onesy/icons-material-rounded-react/IconMaterialPlayArrowW100';
import IconMaterialPause from '@onesy/icons-material-rounded-react/IconMaterialPauseW100';
import IconMaterialForwardMedia from '@onesy/icons-material-rounded-react/IconMaterialForwardMediaW100';
import IconMaterialVolumeDownAlt from '@onesy/icons-material-rounded-react/IconMaterialVolumeDownAltW100';
import IconMaterialVolumeOff from '@onesy/icons-material-rounded-react/IconMaterialVolumeOffW100';
import IconMaterialSettings from '@onesy/icons-material-rounded-react/IconMaterialSettingsW100';
import IconMaterialTune from '@onesy/icons-material-rounded-react/IconMaterialTuneW100';
import IconMaterialSlowMotionVideo from '@onesy/icons-material-rounded-react/IconMaterialSlowMotionVideoW100';
import IconMaterialArrowBackIos from '@onesy/icons-material-rounded-react/IconMaterialArrowBackIosW100';

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
import { IColor, IElementReference, IPropsAny, ISize, ITonal } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    minWidth: '254px'
  },

  wrapper: {
    position: 'relative',
    borderRadius: 'inherit'
  },

  audio: {

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

  controls: {
    position: 'relative',
    borderRadius: 'inherit'
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
    '&.onesy-Slider-root': {
      height: '20px !important',
      width: '100% !important',
      margin: 'unset !important',
      maxWidth: 'unset !important'
    }
  },

  volume: {
    flex: '1 1 auto',

    '&.onesy-Slider-root': {
      height: '24px !important',
      width: '100vw !important',
      maxWidth: '54px !important',
      margin: 'unset !important',
      borderRadius: '0px',

      '& .onesy-Slider-rail': {
        borderRadius: '0px'
      },

      '& .onesy-Slider-track': {
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
  }
}), { name: 'onesy-AudioPlayer' });

export interface IAudioPlayer extends ILine {
  name?: string;
  src?: string;
  mime?: string;
  meta?: any;
  versions?: any;
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
}

const AudioPlayer: React.FC<IAudioPlayer> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAudioPlayer?.props?.default, ...props_ }), [props_]);

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
    mime,

    duration: duration_,

    tonal = true,
    color = 'primary',
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

    className,

    Component,

    ...other
  } = props;

  const { classes } = useStyle();

  const [loaded, setLoaded] = React.useState(false);
  const [duration, setDuration] = React.useState<number>(is('number', meta?.duration) ? meta.duration : undefined);
  const [time, setTime] = React.useState<number>(0);
  const [play, setPlay] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [volume, setVolume] = React.useState(1);
  const [volumeVisible, setVolumeVisible] = React.useState(false);
  const [updating, setUpdating] = React.useState<any>(false);
  const [quality, setQuality] = React.useState<any>();
  const [playbackSpeed, setPlaybackSpeed] = React.useState(1);
  const [openMenu, setOpenMenu] = React.useState<any>();

  const refs = {
    root: React.useRef<any>(null),
    audio: React.useRef<HTMLAudioElement>(null),
    controls: React.useRef<any>(null),
    duration: React.useRef<any>(null),
    time: React.useRef<any>(null),
    play: React.useRef<any>(null),
    updating: React.useRef<any>(null),
    onPlay: React.useRef<any>(null),
    onPause: React.useRef<any>(null),
    onTimeChange: React.useRef<any>(null),
    onBackward: React.useRef<any>(null),
    onForward: React.useRef<any>(null),
    onStop: React.useRef<any>(null),
    startMediaSession: React.useRef<any>(null),
    updateMediaSession: React.useRef<any>(null),
    startMediaSessionOnPlay: React.useRef<any>(null)
  };

  refs.duration.current = duration;

  refs.time.current = time;

  refs.play.current = play;

  refs.updating.current = updating;

  refs.startMediaSessionOnPlay.current = startMediaSessionOnPlay;

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

    refs.audio.current!.volume = value;
  }, []);

  const onTimeChange = React.useCallback((value: number) => {
    setTime(value);

    refs.audio.current!.currentTime = value;

    // update MediaSession
    refs.updateMediaSession.current();
  }, []);

  const onPlaybackSpeed = React.useCallback((value_: number) => {
    const value = clamp(value_, 0, 2);

    setPlaybackSpeed(value);

    setOpenMenu(null);

    refs.audio.current!.playbackRate = value;
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

      refs.audio.current!.play();

      // start MediaSession
      if (refs.startMediaSessionOnPlay.current) refs.startMediaSession.current();

      // update MediaSession
      refs.updateMediaSession.current();
    }
    catch (error) {
      console.error(`AudioPlayer`, error);
    }
  }, []);

  const onPause = React.useCallback(() => {
    setPlay(false);

    refs.audio.current!.pause();
  }, []);

  const onStop = React.useCallback(() => {
    setPlay(false);

    refs.audio.current!.pause();

    refs.audio.current!.currentTime = 0;
  }, []);

  const onMute = React.useCallback(() => {
    setMuted(true);

    refs.audio.current!.muted = true;
  }, []);

  const onUnmute = React.useCallback(() => {
    setMuted(false);

    refs.audio.current!.muted = false;
  }, []);

  refs.onPlay.current = onPlay;

  refs.onPause.current = onPause;

  refs.onTimeChange.current = onTimeChange;

  refs.onForward.current = onForward;

  refs.onBackward.current = onBackward;

  refs.onStop.current = onStop;

  const init = React.useCallback(() => {
    setLoaded(false);

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    refs.audio.current = rootDocument.createElement('audio');

    const audio = refs.audio.current;

    audio.addEventListener('loadedmetadata', () => {
      const value = audio!.duration;

      if (!is('number', durationTime) && is('number', value)) {
        if (refs.duration.current === undefined) setDuration(value);

        setLoaded(true);
      }
    });

    audio.addEventListener('ended', () => {
      refs.onStop.current();
    });

    audio.addEventListener('timeupdate', () => {
      const value = audio.currentTime;

      if (!refs.updating.current && refs.time.current !== value) {
        setTime(value);

        // update MediaSession
        refs.updateMediaSession.current();
      }
    });

    audio.addEventListener('ratechange', () => {
      const value = audio.playbackRate;

      setPlaybackSpeed(value);
    });

    // start MediaSession
    startMediaSession();

    if (is('number', durationTime)) {
      if (refs.duration.current === undefined) setDuration(durationTime);

      setLoaded(true);
    }

    audio.src = src;
  }, [src, durationTime, startMediaSession]);

  React.useEffect(() => {
    if (loaded) {
      let urlNew = src;

      if (quality) {
        if (quality?.meta?.resolution) urlNew += `?version=${quality?.meta?.resolution}`;
      }

      const currentTime = refs.audio.current.currentTime;

      const playing = refs.play.current;

      // pause
      if (playing) refs.onPause.current();

      refs.audio.current.src = urlNew;

      refs.audio.current.load();

      refs.audio.current.currentTime = currentTime;

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

  React.useEffect(() => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    (rootDocument as Document).addEventListener('mouseup', onUpdatingDone);

    (rootDocument as Document).addEventListener('touchend', onUpdatingDone);

    return () => {
      (rootDocument as Document).removeEventListener('mouseup', onUpdatingDone);

      (rootDocument as Document).removeEventListener('touchend', onUpdatingDone);
    };
  }, []);

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
      className: 'onesy-videoPlayer-option'
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
              Original
            </Type>
          )}

          onClick={() => quality ? onQuality(null) : undefined}

          selected={!quality}

          {...itemProps}
        />
      );

      // versions?.forEach((version: any, index: number) => {
      //   const isSelected = quality?.id === version?.id;

      //   items.push(
      //     <ListItem
      //       key={index}

      //       primary={(
      //         <Type
      //           version='b3'
      //         >
      //           {version?.meta?.resolution}p
      //         </Type>
      //       )}

      //       onClick={() => !isSelected ? onQuality(version) : undefined}

      //       selected={isSelected}

      //       {...itemProps}
      //     />
      //   );
      // });
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
        staticClassName('AudioPlayer', theme) && [
          'onesy-AudioPlayer-root',
          `onesy-AudioPlayer-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
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
          classes.wrapper
        ])}
      >
        {start}

        <Surface
          ref={refs.controls}

          gap={0}

          fullWidth

          tonal={tonal}

          color={color}

          Component={Line}

          className={classNames([
            classes.controls,
            classes[`controls_size_${size}`]
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
          >
            {startButtons}

            <Line
              gap={1}

              direction='row'

              align='center'

              justify='space-between'

              fullWidth

              flexNo
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
                    'onesy-Audio-time',
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

                    portal

                    onClose={onSettingsMenuClose}

                    className='onesy-videoPlayer'

                    includeParentQueries={['.onesy-videoPlayer']}

                    {...SettingsMenuProps}

                    ListProps={{
                      className: classNames([
                        SettingsMenuProps?.ListProps?.className,
                        classes.menuSettings
                      ]),

                      size: 'small'
                    }}
                  >
                    <IconButton
                      {...iconButtonProps}

                      {...SettingsButtonProps}
                    >
                      <IconSettings />
                    </IconButton>
                  </Menu>
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

AudioPlayer.displayName = 'onesy-AudioPlayer';

export default AudioPlayer;
