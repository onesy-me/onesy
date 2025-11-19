import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSuperscript = (props: IIcon) => {

  return (
    <Icon
      name='Superscript'

      short_name='Superscript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-600v-120h120v-40H760v-40h160v120H800v40h120v40H760ZM235-160l185-291-172-269h106l124 200h4l123-200h107L539-451l186 291H618L482-377h-4L342-160H235Z"/>
    </Icon>
  );
};

IconMaterialSuperscript.displayName = 'OnesyIconMaterialSuperscript';

export default IconMaterialSuperscript;
