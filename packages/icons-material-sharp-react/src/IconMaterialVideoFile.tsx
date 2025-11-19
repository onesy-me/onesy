import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoFile = (props: IIcon) => {

  return (
    <Icon
      name='VideoFile'

      short_name='VideoFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h240v-80l80 42v-164l-80 42v-80H320v240ZM160-80v-800h400l240 240v560H160Zm360-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
    </Icon>
  );
};

IconMaterialVideoFile.displayName = 'OnesyIconMaterialVideoFile';

export default IconMaterialVideoFile;
