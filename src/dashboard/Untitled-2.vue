 <v-row justify="space-around" v-if="true">
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" max-width="200">
        <template v-slot:activator="{ on, attrs }">
          <v-card class="text-center py-1" color="rgba(255, 255, 255, 0.1)">
            <v-btn
              v-for="(t, index) of trays"
              :key="index"
              :class="t.classes"
              :name="t.name"
              :ref="t.name"
              small
              fab
              dark
              :color="t.color"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark> {{ t.icon }} </v-icon>
            </v-btn>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
