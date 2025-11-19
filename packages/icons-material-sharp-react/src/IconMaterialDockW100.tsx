import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockW100 = (props: IIcon) => {

  return (
    <Icon
      name='DockW100'

      short_name='Dock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-124v-28h268v28H346Zm-54-108v-616h376v616H292Zm28-94v66h320v-66H320Zm0-28h320v-372H320v372Zm0-400h320v-66H320v66Zm0 0v-66 66Zm0 428v66-66Z"/>
    </Icon>
  );
};

IconMaterialDockW100.displayName = 'OnesyIconMaterialDockW100';

export default IconMaterialDockW100;
