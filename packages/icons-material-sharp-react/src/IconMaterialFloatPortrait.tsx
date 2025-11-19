import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloatPortrait = (props: IIcon) => {

  return (
    <Icon
      name='FloatPortrait'

      short_name='FloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 976V176h640v440h-80V256H240v640h280v80H160Zm440 0V696h200v280H600ZM480 576Z"/>
    </Icon>
  );
};

IconMaterialFloatPortrait.displayName = 'OnesyIconMaterialFloatPortrait';

export default IconMaterialFloatPortrait;
