'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function VRCostCalculator() {
  const [budget, setBudget] = useState(100000)
  const [result, setResult] = useState(null)

  const calculate = () => {
    const equipRatio = 0.5
    const buildRatio = 0.4
    const miscRatio = 0.1

    const equip = budget * equipRatio
    const build = budget * buildRatio
    const misc = budget * miscRatio

    const monthlyEquip = equip / 24
    const monthlyBuild = build / 24
    const monthlyOp = 800 + 25000 + 88612

    setResult({
      equip,
      build,
      misc,
      monthlyCost: monthlyEquip + monthlyBuild + monthlyOp,
    })
  }

  return (
    <Card className="max-w-xl mx-auto mt-6">
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="budget">输入项目总预算（元）</Label>
          <Input
            id="budget"
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <Button onClick={calculate}>计算成本结构</Button>

        {result && (
          <div className="space-y-2 mt-4">
            <p>📦 设备成本：{result.equip.toLocaleString()} 元</p>
            <p>🧱 搭建成本：{result.build.toLocaleString()} 元</p>
            <p>🔧 杂项/其他成本：{result.misc.toLocaleString()} 元</p>
            <p className="font-bold mt-2">
              📅 预计月运营成本：{result.monthlyCost.toLocaleString()} 元
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
