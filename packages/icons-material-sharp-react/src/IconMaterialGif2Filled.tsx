import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGif2Filled = (props: IIcon) => {

  return (
    <Icon
      name='Gif2Filled'

      short_name='Gif2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-280v-400h320v80H160v240h160v-80h-80v-80h160v240H80Zm400 0v-400h80v400h-80Zm160 0v-400h280v80H720v80h160v80H720v160h-80Z"/>
    </Icon>
  );
};

IconMaterialGif2Filled.displayName = 'OnesyIconMaterialGif2Filled';

export default IconMaterialGif2Filled;
