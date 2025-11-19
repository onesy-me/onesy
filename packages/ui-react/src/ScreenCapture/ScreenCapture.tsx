import React from 'react';

import { canvasCrop, download, is, isEnvironment, isOS, wait } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialFitScreen from '@onesy/icons-material-rounded-react/IconMaterialFitScreenW100';
import IconMaterialDocumentScanner from '@onesy/icons-material-rounded-react/IconMaterialDocumentScannerW100';
import IconMaterialCropFree from '@onesy/icons-material-rounded-react/IconMaterialCropFreeW100';
import IconMaterialDownload from '@onesy/icons-material-rounded-react/IconMaterialDownloadW100';

import TooltipElement from '../Tooltip';
import SurfaceElement from '../Surface';
import TextFieldElement from '../TextField';
import IconButtonElement from '../IconButton';
import ImageCropElement from '../ImageCrop';
import PortalElement from '../Portal';
import LineElement from '../Line';
import useMediaQuery from '../useMediaQuery';
import { IconDoneAnimated } from '../Buttons/Buttons';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    padding: `${theme.methods.space.value(2.5, 'px')} ${theme.methods.space.value(5, 'px')} ${theme.methods.space.value(3, 'px')}`,
    borderRadius: theme.methods.shape.radius.value('rg', 'px')
  },

  wrapper: {
    inset: '0',
    position: 'fixed',
    background: '#000',
    zIndex: theme.z_index.tooltip + 4
  }
}), { name: 'onesy-ScreenCapture' });

export type TTrackValueVersion = 'image' | 'canvas';

export type IScreenCapture = ISurface & {
  nameDefault?: string;
  name?: string;

  onChangeName?: (value: string) => any;

  view?: boolean;
  entirePage?: boolean;
  free?: boolean;

  type?: string;
  quality?: number;

  onInit?: (supported: boolean) => any;
  onView?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
  onEntirePage?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
  onFree?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
  onFreeSave?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
  onFreeClose?: (event: React.MouseEvent<any> | KeyboardEvent) => any;

  IconView?: IElementReference;
  IconEntirePage?: IElementReference;
  IconFree?: IElementReference;
  IconDownload?: IElementReference;

  TextFieldProps?: IPropsAny;
  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  ImageCropProps?: IPropsAny;
};

const ScreenCapture: React.FC<IScreenCapture> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyScreenCapture?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Tooltip = theme?.elements?.Tooltip || TooltipElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const TextField = theme?.elements?.TextField || TextFieldElement;

  const IconButton = theme?.elements?.IconButton || IconButtonElement;

  const ImageCrop = theme?.elements?.ImageCrop || ImageCropElement;

  const Portal = theme?.elements?.Portal || PortalElement;

  const {
    tonal = true,
    color = 'primary',

    nameDefault,
    name: name_ = `onesy-screenshot.${props.type !== undefined ? props.type.split('/')[1] : 'png'}`,

    onChangeName,

    view = true,
    entirePage = true,
    free = true,

    type = `image/png`,
    quality = 1,

    onInit: onInit_,
    onView: onView_,
    onEntirePage: onEntirePage_,
    onFree: onFree_,
    onFreeSave: onFreeSave_,
    onFreeClose: onFreeClose_,

    IconView = IconMaterialFitScreen,
    IconEntirePage = IconMaterialDocumentScanner,
    IconFree = IconMaterialCropFree,
    IconDownload = IconMaterialDownload,

    TextFieldProps,
    TooltipProps,
    IconButtonProps,
    ImageCropProps = {
      type: `image/png`,
      quality: 1
    },

    Component = 'div',

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [name, setName] = React.useState(nameDefault !== undefined ? nameDefault : name_);
  const [loading, setLoading] = React.useState([]);
  const [done, setDone] = React.useState([]);
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement>();
  const [canvasSelectorValue, setCanvasSelectorValue] = React.useState<any>();
  const [supported, setSupported] = React.useState(true);

  const refs = {
    root: React.useRef<any>(null),
    canvas: React.useRef<any>(null),
    canvasSelectorValue: React.useRef<any>(null),
    element: React.useRef<HTMLVideoElement>(null)
  };

  const touch = useMediaQuery('(pointer: coarse)', { element: refs.root.current });

  refs.canvas.current = canvas;

  refs.canvasSelectorValue.current = canvasSelectorValue;

  const onInit = () => {
    const value = !(touch || isOS('mobile'));

    setInit(true);

    setSupported(value);

    if (is('function', onInit_)) onInit_(value);
  };

  React.useEffect(() => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const method = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'V':
        case 'v':
          if (event.metaKey && event.shiftKey) onView(event as any);

          break;

        // case 'E':
        // case 'e':
        //   if (event.metaKey && event.shiftKey) onEntirePage(event as any);

        //   break;

        case 'F':
        case 'f':
          if (event.metaKey && event.shiftKey) onFree(event as any);

          break;

        case 'S':
        case 's':
          if (event.metaKey) {
            if (refs.canvas.current) onFreeSave(event as any);
          }

          break;

        case 'Enter':
          if (refs.canvas.current) onFreeSave(event as any);

          break;

        case 'Escape':
          if (refs.canvas.current) onFreeClose(event as any);

          break;

        default:
          break;
      }
    };

    rootDocument.addEventListener('keydown', method);

    onInit();

    return () => {
      // Clean up
      rootDocument.removeEventListener('keydown', method);

      if (refs.canvas.current) {
        setCanvas('' as any);

        if (rootDocument.body.style.overflow === 'hidden') rootDocument.body.style.removeProperty('overflow');
      }
    };
  }, []);

  React.useEffect(() => {
    if (init) {
      if (name_ !== name) setName(name_);
    }
  }, [name_]);

  React.useEffect(() => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    if (canvas) {
      rootDocument.body.style.overflow = 'hidden';
    }
    else {
      setCanvasSelectorValue(false);

      if (rootDocument.body.style.overflow === 'hidden') rootDocument.body.style.removeProperty('overflow');
    }
  }, [canvas]);

  const onChange = (value_: any) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setName(value_);

    if (is('function', onChangeName)) onChangeName(value_);
  };

  const trackToValue = async (track: MediaStreamTrack, version: TTrackValueVersion = 'canvas') => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const canvasElement = document.createElement('canvas');

    const { width, height } = track.getSettings();

    canvasElement.width = width || window.innerWidth;
    canvasElement.height = height || window.innerHeight;

    // Hide elements
    const elements = Array.from(rootDocument.body.querySelectorAll('.onesy-ScreenCapture-root')).map((element: HTMLElement) => {
      if (element.parentElement.classList.contains('onesy-Move-root')) return element.parentElement;

      return element;
    });

    elements.forEach((item: HTMLElement) => item.style.visibility = 'hidden');

    // Wait for media options window to hide
    await wait(414);

    // Draw the frame
    canvasElement.getContext('2d').drawImage(refs.element.current, 0, 0);

    // Unhide the elements
    elements.forEach((item: HTMLElement) => item.style.removeProperty('visibility'));

    if (version === 'canvas') return canvasElement;

    const image = canvasElement.toDataURL(type, quality);

    return image;
  };

  const make = async (version: TTrackValueVersion = 'image', options: any = {}) => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    refs.element.current = rootDocument.createElement('video');

    let tracks: MediaStreamTrack[];

    const cleanUp = () => {
      // Stop tracks
      (tracks || []).forEach(item => item.stop());

      // Unload the element
      refs.element.current = undefined;
    };

    try {
      refs.element.current.srcObject = await window.navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true, ...options });

      const mediaStream = refs.element.current.srcObject;

      if (!mediaStream) throw new Error('No media stream');

      // Required to work
      await refs.element.current.play();

      tracks = mediaStream.getVideoTracks();

      const track = tracks[0];

      const value = await trackToValue(track, version);

      // Clean up
      cleanUp();

      return value;
    }
    catch (error) {
      console.log('ScreenCapture make', error);

      // Clean up
      cleanUp();
    }
  };

  const onView = async (event: React.MouseEvent<any>) => {
    setLoading(items => [...items, 'view']);

    try {
      const image = await make();

      download(name, image);
    }
    catch (error) {
      console.log('onView', error);
    }

    setLoading(items => items.filter(item => item !== 'view'));

    setDone(items => [...items, 'view']);

    setTimeout(() => {
      setDone(items => items.filter(item => item !== 'view'));
    }, 1400);

    if (is('function', onView_)) onView_(event);
  };

  // const onEntirePage = async (event: React.MouseEvent<any>) => {
  //   setLoading(items => [...items, 'entirePage']);

  //   try {
  //     const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

  //     await elementToCanvas(rootDocument.body, {
  //       response: 'download',

  //       filter: ['.onesy-Widgets-root', '#onesy-screen-capture'],

  //       download: {
  //         name,
  //         type,
  //         quality
  //       }
  //     });
  //   }
  //   catch (error) {
  //     console.log('onEntirePage', error);
  //   }

  //   setLoading(items => items.filter(item => item !== 'entirePage'));

  //   setDone(items => [...items, 'entirePage']);

  //   setTimeout(() => {
  //     setDone(items => items.filter(item => item !== 'entirePage'));
  //   }, 1400);

  //   if (is('function', onEntirePage_)) onEntirePage_(event);
  // };

  const onFree = async (event: React.MouseEvent<any>) => {
    setLoading(items => [...items, 'free']);

    // Update canvas
    try {
      const valueCanvas = await make('canvas') as HTMLCanvasElement;

      setCanvas(valueCanvas);
    }
    catch (error) {
      console.log('onFree', error);
    }

    setLoading(items => items.filter(item => item !== 'free'));

    if (is('function', onFree_)) onFree_(event);
  };

  const onFreeSave = (event: React.MouseEvent<any>) => {
    // Crop the canvas
    const valueCanvas = canvasCrop(refs.canvas.current, refs.canvasSelectorValue.current.left, refs.canvasSelectorValue.current.top, refs.canvasSelectorValue.current.width, refs.canvasSelectorValue.current.height);

    // Download the image from canvas datauri
    // of the image type and quality, name
    const uri = valueCanvas.toDataURL(type, quality);

    download(name, uri, type);

    // Clear the image
    setCanvas('' as any);

    setDone(items => [...items, 'free']);

    setTimeout(() => {
      setDone(items => items.filter(item => item !== 'free'));
    }, 1400);

    if (is('function', onFreeSave_)) onFreeSave_(event);
  };

  const onFreeClose = (event: React.MouseEvent<any>) => {
    // Clear the image
    setCanvas('' as any);

    if (is('function', onFreeClose_)) onFreeClose_(event);
  };

  const onImageCropSelectorChange = (values: any) => {
    setCanvasSelectorValue(values);
  };

  const iconButtonProps: any = {
    tonal,
    color: 'inherit',
    elevation: false
  };

  const textFieldProps: any = {
    tonal,
    color: 'inherit',
    version: 'text',
    size: 'small',
    fullWidth: true
  };

  const tooltipProps: any = {
    position: 'top',
    portal: false,
    interactive: false
  };

  if (!supported) return null;

  const rootDocumentElement = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      id='onesy-screen-capture'

      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      align='center'

      Component={Line}

      AdditionalProps={{
        Component
      }}

      className={classNames([
        staticClassName('ScreenCapture', theme) && [
          'onesy-ScreenCapture-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={1}

        direction='row'

        align='center'

        justify='center'
      >
        {view && (
          <Tooltip
            name={l('View')}

            {...tooltipProps}

            {...TooltipProps}
          >
            <IconButton
              onClick={onView}

              loading={loading.includes('view')}

              disabled={done.includes('view')}

              {...iconButtonProps}

              {...IconButtonProps}
            >
              {done.includes('view') ? <IconDoneAnimated add in /> : <IconView />}
            </IconButton>
          </Tooltip>
        )}

        {/* {entirePage && (
          <Tooltip
            name={l('Entire page')}

            {...tooltipProps}

            {...TooltipProps}
          >
            <IconButton
              onClick={onEntirePage}

              loading={loading.includes('entirePage')}

              disabled={done.includes('entirePage')}

              {...iconButtonProps}

              {...IconButtonProps}
            >
              {done.includes('entirePage') ? <IconDoneAnimated add in /> : <IconEntirePage />}
            </IconButton>
          </Tooltip>
        )} */}

        {free && (
          <Tooltip
            name={canvas ? l('Save') : l('Free form')}

            {...tooltipProps}

            {...TooltipProps}
          >
            <IconButton
              onClick={(event: React.MouseEvent<any>) => canvas ? onFreeSave(event) : onFree(event)}

              loading={loading.includes('free')}

              disabled={done.includes('free')}

              {...iconButtonProps}

              {...IconButtonProps}
            >
              {done.includes('free') ? <IconDoneAnimated add in /> : canvas ? <IconDownload /> : <IconFree />}
            </IconButton>
          </Tooltip>
        )}
      </Line>

      <TextField
        name={l('Name')}

        value={name}

        onChange={onChange}

        {...textFieldProps}

        {...TextFieldProps}
      />

      {canvas && (
        <Portal
          element={rootDocumentElement.body}
        >
          <div
            className={classNames([
              staticClassName('ScreenCapture', theme) && [
                'onesy-ScreenCapture-image-wrapper'
              ],

              classes.wrapper
            ])}
          >
            <ImageCrop
              image={canvas}

              onSelectorChange={onImageCropSelectorChange}

              TooltipProps={{
                portal: false
              }}

              {...ImageCropProps}
            />
          </div>
        </Portal>
      )}
    </Surface>
  );
});

ScreenCapture.displayName = 'onesy-ScreenCapture';

export default ScreenCapture;
