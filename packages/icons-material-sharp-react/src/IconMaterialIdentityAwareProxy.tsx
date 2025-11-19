import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIdentityAwareProxy = (props: IIcon) => {

  return (
    <Icon
      name='IdentityAwareProxy'

      short_name='IdentityAwareProxy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm0-640v-80h720v80H120Zm0 160v-80h80v80h-80Zm640 0v-80h80v80h-80ZM120-280v-80h80v80h-80Zm640 0v-80h80v80h-80Zm-440 0v-160H120v-80h200v-160h320v160h200v80H640v160H320Z"/>
    </Icon>
  );
};

IconMaterialIdentityAwareProxy.displayName = 'OnesyIconMaterialIdentityAwareProxy';

export default IconMaterialIdentityAwareProxy;
