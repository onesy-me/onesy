import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkipPreviousFilled = (props: IIcon) => {

  return (
    <Icon
      name='SkipPreviousFilled'

      short_name='SkipPrevious'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Z"/>
    </Icon>
  );
};

IconMaterialSkipPreviousFilled.displayName = 'OnesyIconMaterialSkipPreviousFilled';

export default IconMaterialSkipPreviousFilled;
