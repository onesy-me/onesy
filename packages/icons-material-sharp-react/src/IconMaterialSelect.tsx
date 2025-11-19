import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelect = (props: IIcon) => {

  return (
    <Icon
      name='Select'

      short_name='Select'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-80h80v80h-80ZM120-760v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0 640v-80h80v80h-80Zm160-640v-80h80v80h-80ZM120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm640 480v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z"/>
    </Icon>
  );
};

IconMaterialSelect.displayName = 'OnesyIconMaterialSelect';

export default IconMaterialSelect;
