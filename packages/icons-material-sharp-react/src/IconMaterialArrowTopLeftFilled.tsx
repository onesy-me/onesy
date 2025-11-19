import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowTopLeftFilled = (props: IIcon) => {

  return (
    <Icon
      name='ArrowTopLeftFilled'

      short_name='ArrowTopLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-160v-400H313l144 144-56 57-241-241 240-240 57 57-144 143h447v480h-80Z"/>
    </Icon>
  );
};

IconMaterialArrowTopLeftFilled.displayName = 'OnesyIconMaterialArrowTopLeftFilled';

export default IconMaterialArrowTopLeftFilled;
