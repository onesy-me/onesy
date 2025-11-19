import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlutterFilled = (props: IIcon) => {

  return (
    <Icon
      name='FlutterFilled'

      short_name='Flutter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M236-345 100-480l440-440h271L236-345ZM540-40 303-277l237-237h271L574-277 811-40H540Z"/>
    </Icon>
  );
};

IconMaterialFlutterFilled.displayName = 'OnesyIconMaterialFlutterFilled';

export default IconMaterialFlutterFilled;
