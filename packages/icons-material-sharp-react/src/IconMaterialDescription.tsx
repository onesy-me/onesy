import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDescription = (props: IIcon) => {

  return (
    <Icon
      name='Description'

      short_name='Description'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM160-80v-800h400l240 240v560H160Zm360-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
    </Icon>
  );
};

IconMaterialDescription.displayName = 'OnesyIconMaterialDescription';

export default IconMaterialDescription;
