import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqualFilled = (props: IIcon) => {

  return (
    <Icon
      name='EqualFilled'

      short_name='Equal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z"/>
    </Icon>
  );
};

IconMaterialEqualFilled.displayName = 'OnesyIconMaterialEqualFilled';

export default IconMaterialEqualFilled;
