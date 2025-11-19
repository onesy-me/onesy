import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbDownFilled = (props: IIcon) => {

  return (
    <Icon
      name='ThumbDownFilled'

      short_name='ThumbDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-320v-176l146-344h454v520L360-40l-74-74 52-206H40Zm680 0v-520h160v520H720Z"/>
    </Icon>
  );
};

IconMaterialThumbDownFilled.displayName = 'OnesyIconMaterialThumbDownFilled';

export default IconMaterialThumbDownFilled;
