import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayPauseFilled = (props: IIcon) => {

  return (
    <Icon
      name='PlayPauseFilled'

      short_name='PlayPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-312v-336l240 168-240 168Zm320-8v-320h80v320h-80Zm160 0v-320h80v320h-80Z"/>
    </Icon>
  );
};

IconMaterialPlayPauseFilled.displayName = 'OnesyIconMaterialPlayPauseFilled';

export default IconMaterialPlayPauseFilled;
