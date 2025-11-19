import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPausePresentationFilled = (props: IIcon) => {

  return (
    <Icon
      name='PausePresentationFilled'

      short_name='PausePresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialPausePresentationFilled.displayName = 'OnesyIconMaterialPausePresentationFilled';

export default IconMaterialPausePresentationFilled;
