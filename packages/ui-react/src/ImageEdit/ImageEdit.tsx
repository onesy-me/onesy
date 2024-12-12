import React from 'react';

import { is, to, clamp, debounce, canvasCrop, download as downloadMethod, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';
import { TMethod } from '@onesy/models';

import IconMaterialDone from '@onesy/icons-material-rounded-react/IconMaterialDoneW100';
import IconMaterialClose from '@onesy/icons-material-rounded-react/IconMaterialCloseW100';
import IconMaterialTune from '@onesy/icons-material-rounded-react/IconMaterialTuneW100';
import IconMaterialCrop from '@onesy/icons-material-rounded-react/IconMaterialCropW100';
import IconMaterialAspectRatio from '@onesy/icons-material-rounded-react/IconMaterialAspectRatioW100';
import IconMaterialHighQuality from '@onesy/icons-material-rounded-react/IconMaterialHighQualityW100';
import IconMaterialClearAll from '@onesy/icons-material-rounded-react/IconMaterialClearAllW100';
import IconMaterialDownload from '@onesy/icons-material-rounded-react/IconMaterialDownloadW100';
import IconMaterialCloud from '@onesy/icons-material-rounded-react/IconMaterialCloudW100';
import IconMaterialWaterDrop from '@onesy/icons-material-rounded-react/IconMaterialWaterDropW100';
import IconMaterialFlaky from '@onesy/icons-material-rounded-react/IconMaterialFlakyW100';
import IconMaterialWbSunny from '@onesy/icons-material-rounded-react/IconMaterialWbSunnyW100';
import IconMaterialTonality from '@onesy/icons-material-rounded-react/IconMaterialTonalityW100';
import IconMaterialNightlight from '@onesy/icons-material-rounded-react/IconMaterialNightlightW100';

import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import ExpandElement from '../Expand';
import DividerElement from '../Divider';
import SliderElement from '../Slider';
import NumericTextFieldElement from '../NumericTextField';
import ImageCropElement from '../ImageCrop';
import ChipElement from '../Chip';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { canvasBrightness, staticClassName, image as imageMethod, canvasContrast, canvasSaturation, canvasFade, canvasInvert, canvasOldPhoto } from '../utils';
import { IElementReference, IElement, ITonal, IColor, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  option: {
    width: '100%',
    padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  options: {
    width: '100%',
    overflowX: 'auto',
    padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  canvas: {
    width: '100%',
    height: 'auto',
    zIndex: '1'
  },

  inputs: {
    width: '100%'
  },

  divider: {
    '&.onesy-Divider-root': {
      margin: '0px'
    }
  },

  imageWrapper: {
    position: 'relative',
    height: '400px',
    width: '100%',

    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      background: 'currentColor',
      zIndex: '0',
      opacity: '0.94'
    }
  },

  canvasWrapper: {
    position: 'relative',
    lineHeight: '0'
  },

  image: {
    width: '100%',
    height: 'auto'
  },

  imageCopy: {
    width: '100%',
    height: 'auto'
  },

  imageCrop: {
    position: 'absolute',
    inset: '0',
    width: '100% !important',
    height: '100% !important'
  },

  meta: {
    width: '100%',
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  optionInput: {
    '& .onesy-TextField-input-wrapper': {
      padding: '0px',
      height: 'auto'
    },

    '& .onesy-TextField-input': {
      textAlign: 'center'
    }
  },

  filters: {
    width: '100%',
    overflowX: 'auto',

    '& > *': {
      flex: '0 0 auto'
    }
  },

  action: {
    width: '100%',
    paddingTop: theme.methods.space.value(2, 'px')
  },

  slider: {
    width: '100%'
  }
}), { name: 'onesy-ImageEdit' });

export type TImageEditFilter = {
  label?: string;
  Icon?: IElementReference;
  value?: string;

  method: (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => HTMLCanvasElement;

  renderIconButton: (value: string, selected: boolean, onChangeFilter: TMethod) => IElement;

  renderSlider: (value: string, filterValuesCopy: any, onFilterSliderChange: TMethod) => IElement;
};

export interface IImageEdit extends ILine {
  tonal?: ITonal;
  color?: IColor;

  image?: string | HTMLCanvasElement;

  name?: string;
  type?: string;

  openDefault?: boolean;
  openedOptionDefault?: string;

  valueDefault?: HTMLCanvasElement;
  value?: HTMLCanvasElement;

  valueCopyDefault?: HTMLCanvasElement;
  valueCopy?: HTMLCanvasElement;

  onChange?: (value: HTMLCanvasElement) => any;
  onChangeCopy?: (value: HTMLCanvasElement) => any;

  onlyFilters?: Array<string>;
  filters?: Array<TImageEditFilter>;

  meta?: boolean;

  filtersOption?: boolean;
  cropOption?: boolean;
  resizeOption?: boolean;
  qualityOption?: boolean;
  downloadOption?: boolean;

  resizeAspectRatio?: boolean;

  renderOption?: (item?: { label: string; value: string; Icon: IElementReference; }, selected?: boolean, openOption?: (value: any) => any) => IElement;
  renderOptionClear?: (onReset: (imageReset: boolean, valueCopyReset: boolean, resizeReset: boolean) => any) => any;
  renderSave?: (onSave: () => any) => any;
  renderCancel?: (onSave: () => any) => any;
  renderSlider?: (value: string, filterValuesCopy: any, onFilterSliderChange: TMethod) => IElement;
  renderDownload?: (onDownload: () => any) => any;
  renderInput?: (value: HTMLCanvasElement, valueCopy: HTMLCanvasElement, resize: Array<number>, onChange: (value: string, ...args: any[]) => any, property?: string) => IElement;

  IconBrightness?: IElementReference;
  IconContrast?: IElementReference;
  IconSaturation?: IElementReference;
  IconFade?: IElementReference;
  IconInvert?: IElementReference;
  IconOldPhoto?: IElementReference;

  IconSave?: IElementReference;
  IconCancel?: IElementReference;
  IconClear?: IElementReference;
  IconCrop?: IElementReference;
  IconFilters?: IElementReference;
  IconResize?: IElementReference;
  IconQuality?: IElementReference;
  IconDownload?: IElementReference;

  ChipProps?: IPropsAny;
  SliderProps?: IPropsAny;
  TooltipProps?: IPropsAny;
  ImageCropProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
}

const ImageEdit: React.FC<IImageEdit> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyImageEdit?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Expand = React.useMemo(() => theme?.elements?.Expand || ExpandElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const Slider = React.useMemo(() => theme?.elements?.Slider || SliderElement, [theme]);

  const NumericTextField = React.useMemo(() => theme?.elements?.NumericTextField || NumericTextFieldElement, [theme]);

  const ImageCrop = React.useMemo(() => theme?.elements?.ImageCrop || ImageCropElement, [theme]);

  const Chip = React.useMemo(() => theme?.elements?.Chip || ChipElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    image,

    name = 'onesy-image.jpg',
    type = 'image/jpeg',

    openDefault,
    openedOptionDefault,

    valueDefault,
    value: value_,

    valueCopyDefault,
    valueCopy: valueCopy_,

    onChange: onChange_,
    onChangeCopy: onChangeCopy_,

    onlyFilters,
    filters: filters_,

    meta = true,

    filtersOption = true,
    cropOption = true,
    resizeOption = true,
    qualityOption = true,
    downloadOption = true,

    resizeAspectRatio = true,

    renderOption,
    renderOptionClear,
    renderSave,
    renderCancel,
    renderSlider,
    renderDownload,
    renderInput,

    IconBrightness = IconMaterialWbSunny,
    IconContrast = IconMaterialFlaky,
    IconSaturation = IconMaterialWaterDrop,
    IconFade = IconMaterialCloud,
    IconInvert = IconMaterialTonality,
    IconOldPhoto = IconMaterialNightlight,

    IconSave = IconMaterialDone,
    IconCancel = IconMaterialClose,
    IconClear = IconMaterialClearAll,
    IconCrop = IconMaterialCrop,
    IconFilters = IconMaterialTune,
    IconResize = IconMaterialAspectRatio,
    IconQuality = IconMaterialHighQuality,
    IconDownload = IconMaterialDownload,

    ChipProps: ChipProps_,
    SliderProps: SliderProps_,
    TooltipProps: TooltipProps_,
    ImageCropProps: ImageCropProps_,
    IconButtonProps: IconButtonProps_,

    className,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState<HTMLCanvasElement>(valueDefault !== undefined ? valueDefault : value_);
  const [valueCopy, setValueCopy] = React.useState<HTMLCanvasElement>(valueCopyDefault !== undefined ? valueCopyDefault : valueCopy_);
  const [open, setOpen] = React.useState<any>(openDefault);
  const [openedOption, setOpenedOption] = React.useState<any>(openedOptionDefault);
  const [quality, setQuality] = React.useState<any>(100);
  const [filterValues, setFilterValues] = React.useState({});
  const [filterValuesCopy, setFilterValuesCopy] = React.useState({});
  const [filter, setFilter] = React.useState();
  const [resize, setResize] = React.useState<any>();
  const [selection, setSelection] = React.useState<any>();
  const [aspectRatio, setAspectRatio] = React.useState<any>();
  const [aspectRatioCustom, setAspectRatioCustom] = React.useState<any>([1, 1]);
  const [size, setSize] = React.useState('');

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(null),
    option: React.useRef<any>(null),
    value: React.useRef<any>(null),
    valueCopy: React.useRef<any>(null),
    canvasMain: React.useRef<HTMLCanvasElement>(null),
    open: React.useRef<HTMLCanvasElement>(null),
    resizeAspectRatio: React.useRef<any>(null),
    filterValues: React.useRef<any>(null),
    filterValuesCopy: React.useRef<any>(null)
  };

  refs.value.current = value;

  refs.valueCopy.current = valueCopy;

  refs.open.current = open;

  refs.resizeAspectRatio.current = resizeAspectRatio;

  refs.filterValues.current = filterValues;

  refs.filterValuesCopy.current = filterValuesCopy;

  const updateSize = (valueNew: any = refs.canvasMain.current) => {
    const uri = valueNew.toDataURL(type);

    // Update size
    setSize(to(to(uri, 'byte-size'), 'size-format') as any);
  };

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      if (
        ['Escape'].includes(event.key) ||
        (['s', 'S'].includes(event.key) && event.metaKey) ||
        (['f', 'F'].includes(event.key) && event.metaKey && event.shiftKey) ||
        (['c', 'C'].includes(event.key) && event.metaKey && event.shiftKey) ||
        (['d', 'D'].includes(event.key) && (event.metaKey || event.shiftKey)) ||
        (['r', 'R'].includes(event.key) && (event.metaKey || event.shiftKey)) ||
        (['q', 'Q'].includes(event.key) && event.metaKey && event.shiftKey)
      ) {
        event.preventDefault();
      }

      switch (event.key) {
        case 's':
        case 'S':
          if (refs.open.current && event.metaKey) onSave();

          return;

        case 'f':
        case 'F':
          if (event.metaKey && event.shiftKey) openOption('filters');

          return;

        case 'c':
        case 'C':
          if (event.metaKey && event.shiftKey) openOption('crop');

          return;

        case 'd':
        case 'D':
          if (event.metaKey && event.shiftKey) onDownload();

          return;

        case 'r':
        case 'R':
          if (event.metaKey && !event.shiftKey) onReset();

          if (event.metaKey && event.shiftKey) openOption('resize');

          return;

        case 'q':
        case 'Q':
          if (event.metaKey && event.shiftKey) openOption('quality');

          return;

        case 'Escape':
          if (refs.open.current) onCancel();

          return;

        default:
          break;
      }
    };

    if (!refs.value.current) {
      if (image instanceof HTMLCanvasElement) onChange(image);
      else if (is('string', image)) makeImage(image);
    }

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', method);

    setInit(true);

    return () => {
      // Clean up
      rootDocument.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    if (image instanceof HTMLCanvasElement) onChange(image);
    else if (is('string', image)) makeImage(image);
  }, [image]);

  React.useEffect(() => {
    const valueToUse = !open ? refs.value.current : refs.valueCopy.current;

    if (valueToUse) {
      refs.canvasMain.current.width = valueToUse.width;

      refs.canvasMain.current.height = valueToUse.height;

      refs.canvasMain.current?.getContext('2d').drawImage(valueToUse, 0, 0, valueToUse.width, valueToUse.height);

      updateSize();
    }
  }, [value, valueCopy, open]);

  React.useEffect(() => {
    if (init) {
      if (value_ !== value) onChange(value_);
    }
  }, [value_]);

  React.useEffect(() => {
    if (init) {
      if (valueCopy_ !== valueCopy) onChangeCopy(valueCopy_);
    }
  }, [valueCopy_]);

  const applyAllFilters = (canvas: HTMLCanvasElement) => {
    let valueCopy__ = refs.valueCopy.current;

    // Update filters
    Object.keys(refs.filterValuesCopy.current).forEach(item => {
      const filterValue_ = filters.find(item_ => item_.value === item);

      if (filterValue_) {
        const { method } = filterValue_;

        if (
          is('function', method) &&
          refs.filterValuesCopy.current[item] !== undefined
        ) valueCopy__ = method(refs.filterValuesCopy.current[item], canvas, valueCopy__);
      }
    });
  };

  const applyAllFiltersDebounced = React.useCallback(debounce(applyAllFilters, 140), []);

  React.useEffect(() => {
    applyAllFiltersDebounced(refs.canvasMain.current);
  }, [filterValuesCopy]);

  const makeImage = async (valueNew: any = refs.value.current) => {
    const img = await imageMethod(valueNew);

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const canvas = rootDocument.createElement('canvas');

    canvas.width = img.width;

    canvas.height = img.height;

    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    // Image
    onChange(canvas);

    // Image copy
    const copy = rootDocument.createElement('canvas');

    copy.width = canvas.width;

    copy.height = canvas.height;

    copy.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

    onChangeCopy(copy);
  };

  const updateResize = debounce(async (width: number, height: number) => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    // Update value copy
    const canvas = rootDocument.createElement('canvas');

    if (width > 1 && height > 1) {
      canvas.width = width;

      canvas.height = height;

      canvas.getContext('2d').drawImage(refs.value.current, 0, 0, width, height);

      // Value copy
      onChangeCopy(canvas);

      // Update the canvas value
      refs.canvasMain.current.width = width;

      refs.canvasMain.current.height = height;

      refs.canvasMain.current.getContext('2d').drawImage(value, 0, 0, width, height);

      // Update size
      updateSize();
    }
  }, 140);

  const onFilterSliderChange = (valueNew: any, valueFilter: string) => {
    setFilterValuesCopy(values_ => ({
      ...values_,

      [valueFilter]: valueNew
    }));
  };

  const onChangeFilter = (valueNew: any) => {
    // If moving to another filter or closing current one
    // clean up previous one filter for mainCanvas
    if (filter === valueNew) setFilter('' as any);
    else setFilter(valueNew);
  };

  const onChangeAspectRatioCustom = (valueNew_: any, left_ = true) => {
    const valueNew = !valueNew_ ? 1 : valueNew_;

    let left = aspectRatioCustom?.[0] || 1;
    let right = aspectRatioCustom?.[1] || 1;

    left_ ? left = valueNew : right = valueNew;

    setAspectRatioCustom([left, right]);

    onChangeAspectRatio(left / right);
  };

  const onChangeAspectRatio = (valueNew: any) => {
    if (aspectRatio === valueNew) setAspectRatio('');
    else setAspectRatio(valueNew);
  };

  const onChangeResize = async (valueNew: any, width_ = true) => {
    let width: number;
    let height: number;

    if (!refs.resizeAspectRatio.current) {
      if (width_) {
        width = +valueNew;
        height = resize?.[1];
      }
      else {
        width = resize?.[0];
        height = +valueNew;
      }
    }
    else {
      const aspectRatio_ = value?.width / value?.height;

      if (width_) {
        width = +valueNew;
        height = valueNew / aspectRatio_;
      }
      else {
        height = +valueNew;
        width = height * aspectRatio_;
      }
    }

    width = clamp(width, 0);

    height = clamp(height, 0);

    setResize([width, height]);

    await updateResize(width, height);
  };

  const updateQuality = debounce(async (valueNew: any) => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    // Update copy value
    const uri = value.toDataURL('image/jpeg', valueNew / 100);

    const img = await imageMethod(uri);

    const canvas = rootDocument.createElement('canvas');

    canvas.width = img.width;

    canvas.height = img.height;

    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    onChangeCopy(canvas);

    // Update the canvas value
    refs.canvasMain.current.width = canvas.width;

    refs.canvasMain.current.height = canvas.height;

    refs.canvasMain.current?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

    // Update size
    updateSize();
  }, 40);

  const onChangeQuality = async (valueNew: any) => {
    setQuality(valueNew);

    await updateQuality(valueNew);
  };

  const onChange = (valueNew: any) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const onChangeCopy = (valueNew: any) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('valueCopy')) setValueCopy(valueNew);

    if (is('function', onChangeCopy_)) onChangeCopy_(valueNew);
  };

  const onReset = (imageReset = true, valueCopyReset = true, resizeReset = true) => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    setOpen(false);
    setQuality(100);
    setAspectRatio('');
    setAspectRatioCustom([1, 1]);
    setSelection('');
    setFilter('' as any);
    setFilterValuesCopy({ ...filterValues });

    if (resizeReset) setResize([value?.width, value?.height]);

    if (valueCopyReset) {
      const canvas = rootDocument.createElement('canvas');

      canvas.width = refs.value.current.width;

      canvas.height = refs.value.current.height;

      canvas.getContext('2d').drawImage(refs.value.current, 0, 0, refs.value.current.width, refs.value.current.height);

      onChangeCopy(canvas);
    }

    if (imageReset) {
      setFilterValues({});
      setFilterValuesCopy({});

      makeImage(image);
    }
  };

  const openOption = (valueNew: any) => {
    setOpenedOption(valueNew);

    if (open && openedOption === valueNew) {
      setOpen(false);

      onReset(false);
    }
    else if (!open) setOpen(true);
  };

  const onSave = () => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    // Make value copy into value
    let canvas = rootDocument.createElement('canvas');

    canvas.width = refs.valueCopy.current.width;

    canvas.height = refs.valueCopy.current.height;

    canvas.getContext('2d').drawImage(refs.valueCopy.current, 0, 0, refs.valueCopy.current.width, refs.valueCopy.current.height);

    // Update crop
    if (openedOption === 'crop' && selection) {
      // Crop the canvas
      canvas.width = selection.width;

      canvas.height = selection.height;

      canvas = canvasCrop(refs.valueCopy.current, selection.left, selection.top, selection.width, selection.height);
    }

    // Update filters
    setFilterValues({ ...filterValuesCopy });

    applyAllFilters(canvas);

    // Update the main canvas value
    refs.canvasMain.current.width = canvas.width;

    refs.canvasMain.current.height = canvas.height;

    refs.canvasMain.current?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

    // Update value
    onChange(canvas);

    const canvasCopy = rootDocument.createElement('canvas');

    canvasCopy.width = canvas.width;

    canvasCopy.height = canvas.height;

    canvasCopy.getContext('2d').drawImage(canvas, 0, 0, canvasCopy.width, canvasCopy.height);

    // Update value copy
    onChangeCopy(canvasCopy);

    // Reset
    onReset(false, false, false);
  };

  const onDownload = () => {
    // Download the image from canvas datauri
    // of the image type and quality, name
    const uri = refs.value.current.toDataURL(type);

    downloadMethod(name, uri, type);
  };

  const onCancel = () => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    // Reset to unopen
    onReset(false);

    // Make value copy into value
    const canvas = rootDocument.createElement('canvas');

    canvas.width = refs.value.current.width;

    canvas.height = refs.value.current.height;

    canvas.getContext('2d').drawImage(refs.value.current, 0, 0, refs.value.current.width, refs.value.current.height);

    onChangeCopy(canvas);

    // Update the main canvas value
    refs.canvasMain.current.width = refs.value.current?.width;

    refs.canvasMain.current.height = refs.value.current?.height;

    refs.canvasMain.current?.getContext('2d').drawImage(refs.value.current, 0, 0, refs.value.current.width, refs.value.current.height);
  };

  let filters = React.useMemo(() => [
    {
      label: 'Brightness',
      Icon: IconBrightness,
      value: 'brightness',

      method: canvasBrightness,

      renderIconButton: (value__: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value__}

          label='Brightness'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value__)}

            {...IconButtonProps}
          >
            <IconBrightness />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value__: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value__}

          valueDefault={filterValuesCopy_?.[value__] || 0}

          value={filterValuesCopy_?.[value__] || 0}

          min={-100}

          max={100}

          precision={1}

          marks={[
            { value: -100, label: '-100' },
            { value: 0, label: '0' },
            { value: 100, label: '100' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value__);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'onesy-ImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    {
      label: 'Contrast',
      Icon: IconContrast,
      value: 'contrast',

      method: canvasContrast,

      renderIconButton: (value__: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value__}

          label='Contrast'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value__)}

            {...IconButtonProps}
          >
            <IconContrast />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value__: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value__}

          valueDefault={filterValuesCopy_?.[value__] || 0}

          value={filterValuesCopy_?.[value__] || 0}

          min={-100}

          max={100}

          precision={1}

          marks={[
            { value: -100, label: '-100' },
            { value: 0, label: '0' },
            { value: 100, label: '100' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value__);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'onesy-ImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    {
      label: 'Saturation',
      Icon: IconSaturation,
      value: 'saturation',

      method: canvasSaturation,

      renderIconButton: (value__: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value__}

          label='Saturation'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value__)}

            {...IconButtonProps}
          >
            <IconSaturation />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value__: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value__}

          valueDefault={filterValuesCopy_?.[value__] || 0}

          value={filterValuesCopy_?.[value__] || 0}

          min={-100}

          max={100}

          precision={1}

          marks={[
            { value: -100, label: '-100' },
            { value: 0, label: '0' },
            { value: 100, label: '100' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value__);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'onesy-ImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    {
      label: 'Fade',
      Icon: IconFade,
      value: 'fade',

      method: canvasFade,

      renderIconButton: (value__: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value__}

          label='Fade'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value__)}

            {...IconButtonProps}
          >
            <IconFade />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value__: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value__}

          valueDefault={filterValuesCopy_?.[value__] || 0}

          value={filterValuesCopy_?.[value__] || 0}

          min={0}

          max={100}

          precision={1}

          marks={[
            { value: 0, label: '0' },
            { value: 100, label: '100' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value__);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'onesy-ImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    {
      label: 'Invert',
      Icon: IconInvert,
      value: 'invert',

      method: canvasInvert,

      renderIconButton: (value__: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value__}

          label='Invert'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value__)}

            {...IconButtonProps}
          >
            <IconInvert />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value__: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value__}

          valueDefault={filterValuesCopy_?.[value__] || 0}

          value={filterValuesCopy_?.[value__] || 0}

          min={0}

          max={1}

          precision={1}

          marks={[
            { value: 0, label: 'Not inverted' },
            { value: 1, label: 'Inverted' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value__);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'onesy-ImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    {
      label: 'Old photo',
      Icon: IconOldPhoto,
      value: 'old_photo',

      method: canvasOldPhoto,

      renderIconButton: (value__: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value__}

          label='Old photo'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value__)}

            {...IconButtonProps}
          >
            <IconOldPhoto />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value__: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value__}

          valueDefault={filterValuesCopy_?.[value__] || 0}

          value={filterValuesCopy_?.[value__] || 0}

          min={-40}

          max={40}

          precision={1}

          marks={[
            { value: -40, label: '-40' },
            { value: 0, label: 'No filter' },
            { value: 40, label: '40' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value__);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'onesy-ImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    ...(filters_ || [])
  ], [filters_]);

  // Only filters
  if (is('array', onlyFilters)) filters = filters.filter(item => onlyFilters.includes(item.value));

  const ImageCropProps: any = {
    gridLines: true,

    ...ImageCropProps_
  };

  const TooltipProps: any = {
    position: 'bottom',
    interactive: false,

    ...TooltipProps_
  };

  const IconButtonProps: any = {
    tonal,
    color: 'inherit',

    ...IconButtonProps_
  };

  const SliderProps: any = {
    tonal: false,
    color: 'default',

    ...SliderProps_
  };

  const ChipProps: any = {
    size: 'small',

    ...ChipProps_
  };

  const chips = [
    { label: '1:1', value: 1 / 1 },
    { label: '4:3', value: 4 / 3 },
    { label: '16:9', value: 16 / 9 }
  ];

  const options = [
    filtersOption && { label: 'Filters', value: 'filters', Icon: IconFilters },
    cropOption && { label: 'Crop', value: 'crop', Icon: IconCrop },
    resizeOption && { label: 'Resize', value: 'resize', Icon: IconResize },
    qualityOption && { label: 'Quality', value: 'quality', Icon: IconQuality }
  ]
    .filter(Boolean);

  const MetaTypeProps: any = {
    version: 'b3'
  };

  const filterValue = filters.find(item_ => item_.value === filter);

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else if (ref?.current) ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      Component={Surface}

      className={classNames([
        staticClassName('ImageEdit', theme) && [
          'onesy-ImageEdit-root',
          `onesy-ImageEdit-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={0}

        direction='column'

        align='center'

        justify='center'

        className={classNames([
          staticClassName('ImageEdit', theme) && [
            'onesy-ImageEdit-image-wrapper'
          ],

          classes.imageWrapper
        ])}
      >
        <div
          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'onesy-ImageEdit-canvas-wrapper'
            ],

            classes.canvasWrapper
          ])}
        >
          <canvas
            ref={refs.canvasMain}

            className={classNames([
              staticClassName('ImageEdit', theme) && [
                'onesy-ImageEdit-canvas',
                'onesy-ImageEdit-canvas-main'
              ],

              classes.canvas,
              classes.canvas_main
            ])}
          />

          {open && openedOption === 'crop' && (
            <ImageCrop
              image={valueCopy}

              aspectRatio={aspectRatio ? aspectRatio : undefined}

              onSelectorChange={(selector: any) => setSelection(selector)}

              {...ImageCropProps}

              className={classNames([
                staticClassName('ImageEdit', theme) && [
                  'onesy-ImageEdit-image-crop'
                ],

                ImageCropProps.className,
                classes.imageCrop
              ])}

              style={{
                width: valueCopy?.width,
                height: valueCopy?.height
              }}
            />
          )}
        </div>
      </Line>

      {(filtersOption || cropOption || resizeOption || qualityOption) && <>
        <Expand
          in={!!open}

          parent={refs.root.current}

          style={{
            width: '100%'
          }}
        >
          <Line
            gap={0}

            ref={refs.option}

            direction='column'

            className={classNames([
              staticClassName('ImageEdit', theme) && [
                'onesy-ImageEdit-option'
              ],

              classes.option
            ])}
          >
            {openedOption === 'filters' && <>
              <Expand
                in={!!filterValue}

                parent={refs.option.current}

                style={{
                  width: '100%'
                }}
              >
                <div
                  style={{
                    paddingInline: theme.methods.space.value(5, 'px'),
                    paddingBottom: theme.methods.space.value(5, 'px')
                  }}
                >
                  {is('function', filterValue?.renderSlider) && filterValue?.renderSlider(filterValue.value, refs.filterValuesCopy.current, onFilterSliderChange)}
                </div>
              </Expand>

              <Line
                gap={1}

                direction='row'

                align='center'

                justify='flex-start'

                className={classNames([
                  staticClassName('ImageEdit', theme) && [
                    'onesy-ImageEdit-filters'
                  ],

                  classes.filters
                ])}
              >
                {filters.map((item: any) => (
                  is('function', item.renderIconButton) && item.renderIconButton(item.value, item.value === filter, onChangeFilter)
                ))}
              </Line>
            </>}

            {openedOption === 'crop' && (
              <Line
                gap={1}

                direction='row'

                align='center'

                justify='center'

                style={{
                  width: '100%'
                }}
              >
                {chips.map((item: any, index: number) => (
                  <Chip
                    key={index}

                    selected={aspectRatio === item.value}

                    onClick={() => onChangeAspectRatio(item.value)}

                    {...ChipProps}
                  >
                    {item.label}
                  </Chip>
                ))}

                <Line
                  gap={0}

                  direction='row'

                  align='center'

                  justify='center'
                >
                  {is('function', renderInput) ? renderInput(value, valueCopy, aspectRatioCustom, onChangeAspectRatioCustom, 'left') : (
                    <NumericTextField
                      tonal={tonal}

                      color='default'

                      version='text'

                      size='small'

                      min={1}

                      value={aspectRatioCustom?.[0]}

                      onChange={(valueNew: string) => onChangeAspectRatioCustom(+valueNew)}

                      increment={false}

                      decrement={false}

                      className={classNames([
                        staticClassName('ImageEdit', theme) && [
                          'onesy-ImageEdit-option-input'
                        ],

                        classes.optionInput
                      ])}

                      style={{
                        width: 24
                      }}
                    />
                  )}

                  <Type>
                    :
                  </Type>

                  {is('function', renderInput) ? renderInput(value, valueCopy, aspectRatioCustom, onChangeAspectRatioCustom, 'right') : (
                    <NumericTextField
                      tonal={tonal}

                      color='default'

                      version='text'

                      size='small'

                      min={1}

                      value={aspectRatioCustom?.[1]}

                      onChange={(valueNew: string) => onChangeAspectRatioCustom(+valueNew, false)}

                      increment={false}

                      decrement={false}

                      className={classNames([
                        staticClassName('ImageEdit', theme) && [
                          'onesy-ImageEdit-option-input'
                        ],

                        classes.optionInput
                      ])}

                      style={{
                        width: 24
                      }}
                    />
                  )}
                </Line>
              </Line>
            )}

            {openedOption === 'resize' && (
              <Line
                direction='row'

                align='center'

                justify='center'

                className={classNames([
                  staticClassName('ImageEdit', theme) && [
                    'onesy-ImageEdit-inputs'
                  ],

                  classes.inputs
                ])}
              >
                {is('function', renderInput) ? renderInput(value, valueCopy, resize, onChangeResize, 'width') : (
                  <NumericTextField
                    tonal={tonal}

                    label='Width'

                    color='default'

                    version='text'

                    size='small'

                    min={1}

                    max={value?.width}

                    valueDefault={value?.width}

                    value={resize?.[0]}

                    onChange={(valueNew: string) => onChangeResize(valueNew)}
                  />
                )}

                {is('function', renderInput) ? renderInput(value, valueCopy, resize, onChangeResize, 'height') : (
                  <NumericTextField
                    tonal={tonal}

                    label='Height'

                    color='default'

                    version='text'

                    size='small'

                    min={1}

                    max={value?.height}

                    valueDefault={value?.height}

                    value={resize?.[1]}

                    onChange={(valueNew: string) => onChangeResize(valueNew, false)}
                  />
                )}
              </Line>
            )}

            {openedOption === 'quality' && (
              <Line
                gap={3}

                direction='row'

                align='center'

                style={{
                  width: '100%'
                }}
              >
                <Slider
                  valueDefault={quality}

                  value={quality}

                  min={1}

                  max={100}

                  precision={1}

                  marks={[
                    { value: 1 },
                    { value: 50 },
                    { value: 100 }
                  ]}

                  tooltip

                  onChange={onChangeQuality}

                  {...SliderProps}

                  className={classNames([
                    staticClassName('ImageEdit', theme) && [
                      'onesy-ImageEdit-slider'
                    ],

                    SliderProps.className,
                    classes.slider
                  ])}
                />

                <NumericTextField
                  tonal={tonal}

                  color='default'

                  version='text'

                  size='small'

                  min={1}

                  max={100}

                  value={quality}

                  increment={false}

                  decrement={false}

                  onChange={(valueNew: string) => onChangeQuality(+valueNew)}

                  className={classNames([
                    staticClassName('ImageEdit', theme) && [
                      'onesy-ImageEdit-option-input'
                    ],

                    classes.optionInput
                  ])}

                  style={{
                    width: 34
                  }}
                />
              </Line>
            )}

            <Line
              gap={1}

              direction='row'

              align='center'

              justify='center'

              className={classNames([
                staticClassName('ImageEdit', theme) && [
                  'onesy-ImageEdit-action'
                ],

                classes.action
              ])}
            >
              {is('function', renderSave) ? renderSave(onSave) : (
                <Tooltip
                  label='Save'

                  {...TooltipProps}
                >
                  <IconButton
                    version='outlined'

                    onClick={onSave}

                    {...IconButtonProps}
                  >
                    <IconSave />
                  </IconButton>
                </Tooltip>
              )}

              {is('function', renderCancel) ? renderCancel(onSave) : (
                <Tooltip
                  label='Cancel'

                  {...TooltipProps}
                >
                  <IconButton
                    version='outlined'

                    onClick={onCancel}

                    {...IconButtonProps}
                  >
                    <IconCancel />
                  </IconButton>
                </Tooltip>
              )}
            </Line>
          </Line>

          <Divider
            color='inherit'

            className={classNames([
              staticClassName('ImageEdit', theme) && [
                'onesy-ImageEdit-divider'
              ],

              classes.divider
            ])}
          />
        </Expand>

        <Line
          direction='column'

          align='center'

          justify='center'

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'onesy-ImageEdit-options'
            ],

            classes.options
          ])}
        >
          <Line
            gap={1}

            direction='row'

            justify='flex-start'
          >
            {options.map((item: any, index: number) => (
              is('function', renderOption) ? renderOption(item, open && (openOption === item.value), openOption) : (
                <Tooltip
                  key={index}

                  label={item.label}

                  {...TooltipProps}
                >
                  <IconButton
                    version='outlined'

                    selected={open && (openedOption === item.value)}

                    onClick={() => openOption(item.value)}

                    {...IconButtonProps}
                  >
                    <item.Icon />
                  </IconButton>
                </Tooltip>
              )
            ))}

            <Line
              gap={0}

              direction='row'

              align='center'
            >
              {downloadOption && is('function', renderDownload) ? renderDownload(onDownload) : (
                <Tooltip
                  label='Download'

                  {...TooltipProps}
                >
                  <IconButton
                    version='text'

                    onClick={onDownload}

                    {...IconButtonProps}
                  >
                    <IconDownload />
                  </IconButton>
                </Tooltip>
              )}

              {is('function', renderOptionClear) ? renderOptionClear(onReset) : (
                <Tooltip
                  label='Reset'

                  {...TooltipProps}
                >
                  <IconButton
                    version='text'

                    onClick={onReset}

                    {...IconButtonProps}
                  >
                    <IconClear />
                  </IconButton>
                </Tooltip>
              )}
            </Line>
          </Line>
        </Line>
      </>}

      {children}

      {/* Meta */}
      {meta && value && <>
        <Divider
          color='inherit'

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'onesy-ImageEdit-divider'
            ],

            classes.divider
          ])}
        />

        <Line
          gap={1}

          direction='row'

          align='center'

          justify='center'

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'onesy-ImageEdit-meta'
            ],

            classes.meta
          ])}
        >
          <Type
            {...MetaTypeProps}
          >
            Dimensions: {(!open ? value : valueCopy)?.width}x{(!open ? value : valueCopy)?.height}
          </Type>

          <Type
            {...MetaTypeProps}
          >
            ·
          </Type>

          <Type
            {...MetaTypeProps}
          >
            Size: {size}
          </Type>
        </Line>
      </>}
    </Line>
  );
});

ImageEdit.displayName = 'onesy-ImageEdit';

export default ImageEdit;
