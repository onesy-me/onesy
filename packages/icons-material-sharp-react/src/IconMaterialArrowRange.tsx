import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRange = (props: IIcon) => {

  return (
    <Icon
      name='ArrowRange'

      short_name='ArrowRange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280 80-480l200-200 56 56-103 104h494L624-624l56-56 200 200-200 200-56-56 103-104H233l103 104-56 56Z"/>
    </Icon>
  );
};

IconMaterialArrowRange.displayName = 'OnesyIconMaterialArrowRange';

export default IconMaterialArrowRange;
