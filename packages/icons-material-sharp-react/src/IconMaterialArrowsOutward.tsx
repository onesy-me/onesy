import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowsOutward = (props: IIcon) => {

  return (
    <Icon
      name='ArrowsOutward'

      short_name='ArrowsOutward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-280-56-56 103-104H520v-80h207L624-624l56-56 200 200-200 200Zm-400 0L80-480l200-200 56 56-103 104h207v80H233l103 104-56 56Z"/>
    </Icon>
  );
};

IconMaterialArrowsOutward.displayName = 'OnesyIconMaterialArrowsOutward';

export default IconMaterialArrowsOutward;
