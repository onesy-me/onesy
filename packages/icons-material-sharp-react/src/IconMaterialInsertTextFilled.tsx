import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertTextFilled = (props: IIcon) => {

  return (
    <Icon
      name='InsertTextFilled'

      short_name='InsertText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-320v-240H320v-80h320v80H520v240h-80ZM40-40v-240h80v-400H40v-240h240v80h400v-80h240v240h-80v400h80v240H680v-80H280v80H40Zm240-160h400v-80h80v-400h-80v-80H280v80h-80v400h80v80Z"/>
    </Icon>
  );
};

IconMaterialInsertTextFilled.displayName = 'OnesyIconMaterialInsertTextFilled';

export default IconMaterialInsertTextFilled;
