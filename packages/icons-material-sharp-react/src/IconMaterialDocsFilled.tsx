import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDocsFilled = (props: IIcon) => {

  return (
    <Icon
      name='DocsFilled'

      short_name='Docs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z"/>
    </Icon>
  );
};

IconMaterialDocsFilled.displayName = 'OnesyIconMaterialDocsFilled';

export default IconMaterialDocsFilled;
