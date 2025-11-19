import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialServiceToolboxFilled = (props: IIcon) => {

  return (
    <Icon
      name='ServiceToolboxFilled'

      short_name='ServiceToolbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-240h200v40h80v-40h240v40h80v-40h200v240H80Zm17-320 104-240h79v-40q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v40h79l104 240H680v-40h-80v40H360v-40h-80v40H97Zm263-240h240v-40H360v40Z"/>
    </Icon>
  );
};

IconMaterialServiceToolboxFilled.displayName = 'OnesyIconMaterialServiceToolboxFilled';

export default IconMaterialServiceToolboxFilled;
