import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayArrowFilled = (props: IIcon) => {

  return (
    <Icon
      name='PlayArrowFilled'

      short_name='PlayArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200v-560l440 280-440 280Z"/>
    </Icon>
  );
};

IconMaterialPlayArrowFilled.displayName = 'OnesyIconMaterialPlayArrowFilled';

export default IconMaterialPlayArrowFilled;
