import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWrapText = (props: IIcon) => {

  return (
    <Icon
      name='WrapText'

      short_name='WrapText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-132 440-280l148-148 56 58-50 50h96q29 0 49.5-20.5T760-390q0-29-20.5-49.5T690-460H160v-80h530q63 0 106.5 43.5T840-390q0 63-43.5 106.5T690-240h-96l50 50-56 58ZM160-240v-80h200v80H160Zm0-440v-80h640v80H160Z"/>
    </Icon>
  );
};

IconMaterialWrapText.displayName = 'OnesyIconMaterialWrapText';

export default IconMaterialWrapText;
