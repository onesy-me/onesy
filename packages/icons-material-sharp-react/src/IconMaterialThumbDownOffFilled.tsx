import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbDownOffFilled = (props: IIcon) => {

  return (
    <Icon
      name='ThumbDownOffFilled'

      short_name='ThumbDownOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 16v-4.4L4.65 3H16v13l-7 7-1.85-1.85L8.45 16Zm17 0V3h4v13Z"/>
    </Icon>
  );
};

IconMaterialThumbDownOffFilled.displayName = 'OnesyIconMaterialThumbDownOffFilled';

export default IconMaterialThumbDownOffFilled;
